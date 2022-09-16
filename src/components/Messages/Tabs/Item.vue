<script lang="ts" setup>
defineProps<{
  label?: string;
  active?: boolean;
}>();
</script>

<template>
  <div
    class="border-b border-black/10 py-2 select-none cursor-pointer text-sm hover:border-black/50 transition-colors"
    :class="{
      'border-black text-black': active,
      'text-black/50': !active,
    }"
  >
    {{ label }}
  </div>
</template>
