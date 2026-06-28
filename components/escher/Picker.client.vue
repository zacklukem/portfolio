<script setup lang="ts">
import type { EscherContext } from "./context";
import fsSource from "./shaders/picker.fsh?raw";
const ctx = inject<EscherContext>("escherContext")!;

function onUpload(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) return;

  const file = target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      ctx.image = img;
    };
    img.src = e.target?.result as string;
  };
  reader.readAsDataURL(file);
}
</script>

<template>
  <div class="canvas-container">
    <EscherCanvas
      :fsSource="fsSource"
      :params="{ power: ctx.power, zoom: ctx.zoom }"
    />
  </div>
  <div class="inputs">
    <input type="file" @input="onUpload" />
    <label>
      Power: {{ ctx.power }}
      <br />
      <input type="range" step="1" min="1" max="10" v-model="ctx.power" />
    </label>
    <label>
      Zoom: {{ ctx.zoom }}
      <br />
      <input
        type="range"
        step="0.01"
        min="1"
        :max="Math.pow(2, ctx.power)"
        v-model="ctx.zoom"
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
