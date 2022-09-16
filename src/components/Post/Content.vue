<script lang="ts" setup>
defineProps({
  image: {
    type: String,
    required: true,
    default: null,
  },
});
</script>

<template>
  <img
    :src="image"
    alt="post image"
    class="w-full aspect-square object-cover"
  />
</template>
