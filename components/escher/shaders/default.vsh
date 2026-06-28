precision highp float;

attribute vec4 vertexPosition;

varying vec2 texCoord;

void main() {
  gl_Position = vertexPosition;
  texCoord = vertexPosition.xy;
}