<script lang="ts" setup>
import StoryBox from "../Story/Box.vue";

const emojis = ["✨", "🔥", "🎉", "🤯", "💅", "🙇‍♂️"];

const getRandomEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
</script>

<template>
  <section class="flex no-scrollbar px-4 py-2 overflow-x-auto space-x-4">
    <StoryBox
      v-for="item of 8"
      :avatar="`https://picsum.photos/id/${item + 300}/200/200`"
      :username="`${getRandomEmoji()} Higlight`"
      contrast
      seen
    />
  </section>
</template>
