const vsSource = `
precision highp float;

attribute vec4 vertexPosition;

varying vec2 texCoord;

void main() {
  gl_Position = vertexPosition;
  texCoord = vertexPosition.xy;
}
`;

const fsSource = `
precision highp float;

uniform sampler2D image;
uniform float power;
uniform float zoom;

varying vec2 texCoord;

vec4 sample(vec2 coord) {
  return texture2D(image, (coord * vec2(1.0, -1.0) + 1.0) / 2.0);
}

vec4 sampleWithDepth(vec2 coord) {
  float factor = 1.0 / pow(2.0, power);
  for (int i = 0; i < 18; i++) {
    if (coord.x > factor || coord.x < -factor || coord.y > factor || coord.y < -factor) {
      return sample(coord);
    }
    coord /= factor;
  }
  return sample(coord);
}

vec2 logc(vec2 c) {
  return vec2(log(length(c)), atan(c.y, c.x));
}

vec2 expc(vec2 c) {
  float r = exp(c.x);
  return vec2(r * cos(c.y), r * sin(c.y));
}

vec2 mulc(vec2 a, vec2 b) {
  return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
}

vec2 divc(vec2 a, vec2 b) {
  float denom = b.x * b.x + b.y * b.y;
  return vec2((a.x * b.x + a.y * b.y) / denom, (a.y * b.x - a.x * b.y) / denom);
}

#define PI ${Math.PI}

void main() {
  float A = 2.0 * PI;
  float B = pow(2.0, power);
  float x = (A*A) / (log(B)*log(B) + A*A);
  float y = (A*log(B)) / (log(B)*log(B) + A*A);

  vec2 coords = expc(divc(logc(texCoord), vec2(x, y)));

  gl_FragColor = sampleWithDepth(coords / (zoom * 16.0));
}
`;

export function createRenderer(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl2")!;

  let image: HTMLImageElement | null = null;
  let texture: WebGLTexture | null = null;

  const shaders = initShaderProgram(vsSource, fsSource);

  const attribLocations = {
    vertexPosition: gl.getAttribLocation(shaders, "vertexPosition"),
  };

  const uniformLocations = {
    image: gl.getUniformLocation(shaders, "image")!,
    power: gl.getUniformLocation(shaders, "power")!,
    zoom: gl.getUniformLocation(shaders, "zoom")!,
  };

  const { positionBuffer } = initBuffers();

  function render(power: number, zoom: number) {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.useProgram(shaders);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(
      attribLocations.vertexPosition,
      2,
      gl.FLOAT,
      false,
      0,
      0,
    );
    gl.enableVertexAttribArray(attribLocations.vertexPosition);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.uniform1i(uniformLocations.image, 0);
    gl.uniform1f(uniformLocations.power, power);
    gl.uniform1f(uniformLocations.zoom, zoom);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  function setImage(newImage: HTMLImageElement) {
    if (image === newImage) return;
    image = newImage;

    if (texture) {
      gl.deleteTexture(texture);
    }

    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

    if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
      gl.generateMipmap(gl.TEXTURE_2D);
    } else {
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    }
  }

  function initBuffers() {
    const positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    return { positionBuffer };
  }

  function initShaderProgram(vsSource: string, fsSource: string) {
    const vertexShader = loadShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fsSource)!;

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      throw new Error(
        `Unable to initialize the shader program: ${gl.getProgramInfoLog(
          shaderProgram,
        )}`,
      );
    }

    return shaderProgram;
  }

  function loadShader(type: number, source: string) {
    const shader = gl.createShader(type)!;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`An error occurred compiling the shaders: ${log}`);
    }

    return shader;
  }

  return {
    render,
    setImage,
  };
}

function isPowerOf2(value: number) {
  return (value & (value - 1)) === 0;
}
