<script lang="ts" setup>
// Functions
import { getFormattedNumberValue } from "../../functions/getFormattedNumber";

// Components
import IconChat from "~icons/tabler/message-circle";
import IconHeart from "../Icons/Heart.vue";
import IconPaperAirplane from "../Icons/PaperAirplane.vue";
import IconBookmark from "../Icons/Bookmark.vue";

defineProps<{
  username: string;
  description?: string;
}>();

// a function that return a number between 10 and 100000
const getRandomNumber = (maxValue: number, startValue: number = 1) =>
  getFormattedNumberValue(Math.floor(Math.random() * maxValue) + startValue);
</script>

<template>
  <div class="flex flex-col px-4 py-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-3 [&>*]:cursor-pointer">
        <IconHeart :animation="true" />
        <IconChat class="h-8 w-8" />
        <IconPaperAirplane />
      </div>

      <div>
        <IconBookmark />
      </div>
    </div>

    <span class="mb-1 font-medium mt-3 hover:underline cursor-pointer">
      {{ getRandomNumber(100000, 10) }} likes
    </span>

    <div class="space-y-2">
      <p class="space-x-2">
        <span class="font-medium hover:underline cursor-pointer">
          {{ username }}
        </span>

        <span>{{ description }}</span>
      </p>

      <span class="text-black/50 hover:underline cursor-pointer"
        >View all {{ getRandomNumber(250) }} comments</span
      >
    </div>

    <span class="mt-1.5 font-light uppercase text-black/50 text-xs">
      {{ getRandomNumber(23, 0) }} hours ago
    </span>
  </div>
</template>
