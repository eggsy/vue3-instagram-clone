<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
    default: "",
  },
});
</script>

<template>
  <section class="space-y-3">
    <h4 class="font-medium text-sm">
      {{ title }}
    </h4>

    <slot />
  </section>
</template>
