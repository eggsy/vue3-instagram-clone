<script lang="ts" setup>
import StoryBox from "../Story/Box.vue";
</script>

<template>
  <div class="px-4 py-2 flex justify-between gap-4">
    <StoryBox avatar="https://i.imgur.com/7OXeSik.jpg" size="lg" />

    <div
      class="flex text-[15px] items-center space-x-4 flex-grow justify-center"
    >
      <div class="leading-tight text-center">
        <h3 class="font-medium">26</h3>
        <span>Posts</span>
      </div>

      <div class="leading-tight text-center">
        <h3 class="font-medium">573</h3>
        <span>Followers</span>
      </div>

      <div class="leading-tight text-center">
        <h3 class="font-medium">432</h3>
        <span>Following</span>
      </div>
    </div>
  </div>
</template>
