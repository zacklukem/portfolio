<script lang="ts" setup>
import type { EscherContext } from "./context";

const context: EscherContext = reactive({
  image: null,
  power: 4,
  zoom: 1,
});

provide("escherContext", context);
</script>

<template>
  <slot />
</template>
