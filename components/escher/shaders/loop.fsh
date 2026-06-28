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

vec2 logc(vec2 c) { return vec2(log(length(c)), atan(c.y, c.x)); }

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

void main() {
  float A = 2.0 * PI;
  float B = pow(2.0, power);
  float x = (A * A) / (log(B) * log(B) + A * A);
  float y = (A * log(B)) / (log(B) * log(B) + A * A);

  vec2 coords = expc(divc(logc(texCoord), vec2(x, y)));

  gl_FragColor = sampleWithDepth(coords / (zoom * 16.0));
}