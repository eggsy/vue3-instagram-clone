<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="space-y-3">
    <h4 class="font-medium text-sm">
      {{ title }}
    </h4>

    <slot />
  </section>
</template>
