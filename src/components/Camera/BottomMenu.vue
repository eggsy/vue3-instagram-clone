<script lang="ts" setup>
import IconRefresh from "~icons/tabler/refresh";
</script>

<template>
  <div class="flex text-2xl items-center justify-between">
    <img
      src="https://picsum.photos/200/200"
      class="object-cover h-8 w-8 rounded-md border border-white"
      alt="gallery icon"
    />

    <div class="flex items-center text-white/50 text-xs uppercase space-x-3">
      <span class="invisible">Post</span>
      <span>Post</span>
      <span class="text-white">Story</span>
      <span>Reel</span>
      <span>Live</span>
    </div>

    <div class="bg-white/10 rounded-full p-1">
      <IconRefresh />
    </div>
  </div>
</template>
