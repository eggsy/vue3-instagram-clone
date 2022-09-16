<script lang="ts" setup>
defineProps<{
  image: string;
}>();
</script>

<template>
  <img
    :src="image"
    alt="post image"
    class="w-full aspect-square object-cover"
  />
</template>
