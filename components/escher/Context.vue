<script lang="ts" setup>
import type { EscherContext } from "./context";

const ctx: EscherContext = reactive({
  image: null,
  power: 4,
  zoom: 1,
});

provide("escherContext", ctx);

onMounted(async () => {
  const img = new Image();
  img.onload = () => {
    ctx.image = img;
  };
  img.src = "/escher.jpg";
});
</script>

<template>
  <slot />
</template>
