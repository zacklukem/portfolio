import vsSource from "./shaders/default.vsh?raw";

export type Renderer<Params extends string[]> = ReturnType<
  typeof createRenderer<Params>
>;

export function createRenderer<const Params extends string[]>(
  canvas: HTMLCanvasElement,
  fsSource: string,
  params: Params,
) {
  const gl = canvas.getContext("webgl2")!;

  let image: HTMLImageElement | null = null;
  let texture: WebGLTexture | null = null;

  const shaders = initShaderProgram(vsSource, fsSource);

  const attribLocations = {
    vertexPosition: gl.getAttribLocation(shaders, "vertexPosition"),
  };

  const uniformLocations = {
    image: gl.getUniformLocation(shaders, "image")!,
    ...(Object.fromEntries(
      params.map((param) => [param, gl.getUniformLocation(shaders, param)!]),
    ) as Record<Params[number], WebGLUniformLocation>),
  };

  const { positionBuffer } = initBuffers();

  function render(params: Record<Params[number], number>) {
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
    for (const [key, value] of Object.entries(params)) {
      gl.uniform1f(uniformLocations[key as Params[number]], value as number);
    }
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
