<script setup lang="ts">
const props = defineProps<{
    href: string
}>();

const simpleHref = computed(() => props.href.replace(/https?:\/\//, ''));
</script>
<template>
    <a :href="href">
        <span class="print-hidden">
            <slot />
        </span>
        <span class="screen-hidden">{{ simpleHref }}</span>
    </a>
</template>