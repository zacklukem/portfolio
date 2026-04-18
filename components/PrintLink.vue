<script setup lang="ts">
const props = defineProps<{
  href: string;
}>();

const printHref = computed(() => {
  if (props.href.startsWith("/")) return `https://zacklukem.com${props.href}`;
  return props.href;
});

const simpleHref = computed(() => printHref.value.replace(/https?:\/\//, ""));
</script>
<template>
  <a :href="href" class="print-hidden">
    <span class="print-hidden">
      <slot />
    </span>
  </a>
  <a :href="printHref" class="screen-hidden">
    <span class="screen-hidden">{{ simpleHref }}</span>
  </a>
</template>
