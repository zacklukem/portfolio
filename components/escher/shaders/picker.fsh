#define PI 3.141592653589793

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
    if (coord.x > factor || coord.x < -factor || coord.y > factor ||
        coord.y < -factor) {
      return sample(coord);
    }
    coord /= factor;
  }
  return sample(coord);
}

void main() { gl_FragColor = sampleWithDepth(texCoord / (zoom * 16.0)); }