<script setup lang="ts" generic="Params extends string[]">
import type { EscherContext } from "./context";
import { useTemplateRef } from "vue";
import { createRenderer } from "./renderer";
const ctx = inject<EscherContext>("escherContext")!;
const canvas = useTemplateRef<HTMLCanvasElement>("canvas");

const props = defineProps<{
  fsSource: string;
  params: Record<Params[number], number>;
}>();

const renderer = computed(() => {
  if (!canvas.value) return null;

  return createRenderer(
    canvas.value,
    props.fsSource,
    Object.keys(props.params) as Params,
  );
});

effect(() => {
  const renderer$ = renderer.value;
  const image$ = ctx.image;
  const canvas$ = canvas.value;
  if (!renderer$ || !image$ || !canvas$) return;

  const height = 500;

  canvas$.height = height * window.devicePixelRatio;
  canvas$.width = canvas$.height * (image$.width / image$.height);

  canvas$.style.width = `${canvas$.width / window.devicePixelRatio}px`;
  canvas$.style.height = `${canvas$.height / window.devicePixelRatio}px`;

  renderer$.setImage(image$);

  const frame = requestAnimationFrame(() => {
    renderer$.render(props.params);
  });

  return () => {
    cancelAnimationFrame(frame);
  };
});
</script>

<template>
  <canvas ref="canvas" width="500" height="500" />
</template>
