<script setup lang="ts">
import { createRenderer } from "./renderer";
import { ref, useTemplateRef } from "vue";
const canvas = useTemplateRef<HTMLCanvasElement>("canvas");
const image = ref<HTMLImageElement>();
const power = ref(4);
const zoom = ref(1);

onMounted(() => {
  const img = new Image();
  img.onload = () => {
    image.value = img;
  };
  img.src = "/escher.jpg";
});

const renderer = computed(() => {
  if (!canvas.value) return null;

  return createRenderer(canvas.value);
});

function onUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) return;

  const file = target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      image.value = img;
    };
    img.src = e.target?.result as string;
  };
  reader.readAsDataURL(file);
}

effect(() => {
  const renderer$ = renderer.value;
  const image$ = image.value;
  const power$ = power.value;
  const canvas$ = canvas.value;
  const zoom$ = zoom.value;
  if (!renderer$ || !image$ || !canvas$) return;

  const height = 500;

  canvas$.height = height * window.devicePixelRatio;
  canvas$.width = canvas$.height * (image$.width / image$.height);

  canvas$.style.width = `${canvas$.width / window.devicePixelRatio}px`;
  canvas$.style.height = `${canvas$.height / window.devicePixelRatio}px`;

  renderer$.setImage(image$);

  const frame = requestAnimationFrame(() => {
    renderer$.render(power$, zoom$);
  });

  return () => {
    cancelAnimationFrame(frame);
  };
});
</script>

<template>
  <div class="canvas-container">
    <canvas ref="canvas" width="500" height="500" />
  </div>
  <div class="inputs">
    <input type="file" @input="onUpload" />
    <label>
      Power: {{ power }}
      <br />
      <input type="range" step="1" min="1" max="10" v-model="power" />
    </label>
    <label>
      Zoom: {{ zoom }}
      <br />
      <input
        type="range"
        step="0.01"
        min="1"
        :max="Math.pow(2, power)"
        v-model="zoom"
      />
    </label>
  </div>
</template>

<style scoped lang="scss">
.canvas-container {
  min-width: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

input[type="file"] {
  font-size: 0.75rem;
  font-family: "Sono", monospace;
  font-variation-settings: "MONO" 1;
}

input[type="file"]::file-selector-button {
  font-size: 0.75rem;
  border-radius: 4px;
  margin-right: 16px;
  padding: 8px 12px;
  background-color: var(--zlm-bg-dark-color);
  color: var(--zlm-text-color);
  border: 2px solid var(--zlm-hr-color);
  font-family: "Sono", monospace;
  font-variation-settings: "MONO" 1;
  cursor: pointer;
  &:hover {
    background-color: var(--zlm-bg-color);
  }
}

.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}
</style>
