<script lang="ts" setup>
import { ref } from "vue";
import data from "../../data";

// Components
import StoryBox from "../Story/Box.vue";

withDefaults(
  defineProps<{
    image?: string;
  }>(),
  {
    image: "https://picsum.photos/300/300",
  }
);

const followed = ref(false);
const mockValues = [
  "$1 mentioned you in a comment: @eggsy_dev",
  "$1 liked your comment: Amazing 🔥",
  "$1 and 4 others liked your story.",
  "$1 liked your post.",
  "$1, $2 and 40 others liked your reel.",
];

const mockNames = data
  .map((item) => item.user.nickname)
  .filter((item) => item !== "eggsy_dev");

const getRandomType = Math.random() > 0.7 ? "follow" : "random";
const getRandomBooleanValue = Math.random() > 0.5;
const getRandomValues =
  mockValues[Math.floor(Math.random() * mockValues.length)];
const getRandomName = mockNames[Math.floor(Math.random() * mockNames.length)];

const getAnotherRandomName = () => {
  const filteredNames = mockNames.filter((name) => name !== getRandomName);

  return filteredNames[Math.floor(Math.random() * filteredNames.length)];
};

// function that returns random hour value
const getRandomHour = Math.floor(Math.random() * 23) + 1;

const findPersonAvatar = () => {
  const person = data.find((p) => p.user.nickname === getRandomName);

  return person?.user.avatar;
};
</script>

<template>
  <div class="flex items-center space-x-4">
    <StoryBox
      username="eggsy_dev"
      size="sm"
      :put-username="false"
      :avatar="findPersonAvatar() || ''"
      class="flex-shrink-0"
      :seen="getRandomBooleanValue"
    />

    <div class="flex-grow font-light leading-tight text-sm space-y-1">
      <p
        v-if="getRandomType !== 'follow'"
        v-html="
          getRandomValues
            .replace('$1', `<strong>${getRandomName}</strong>`)
            .replace('$2', `<strong>${getAnotherRandomName()}</strong>`) +
          `<span class='text-black/50 ml-1'>${getRandomHour}h</span>`
        "
      />

      <p v-else>
        <strong>{{ getRandomName }}</strong> started following you.
      </p>
    </div>

    <img
      v-if="getRandomType !== 'follow'"
      :src="image"
      alt="post image"
      class="h-10 flex-shrink-0 w-10 object-cover"
    />

    <button
      v-else
      class="flex-shrink-0 text-sm outline-none rounded-md px-5 py-1"
      :class="{
        'bg-blue-500 text-white': !followed,
        'bg-black/10 text-black': followed,
      }"
      @click="followed = !followed"
    >
      {{ followed ? "Followed" : "Follow" }}
    </button>
  </div>
</template>

<style scoped>
:deep(strong) {
  @apply font-medium;
}
</style>
