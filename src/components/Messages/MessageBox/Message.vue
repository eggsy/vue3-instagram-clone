<script lang="ts" setup>
import CameraIcon from "~icons/tabler/camera";

// Components
import StoryBox from "../../Story/Box.vue";

const props = defineProps<{
  avatar?: string;
  username: string;
}>();

const mockMessages = [
  "How are you?",
  "Seen 3 h ago",
  `${props.username} shared a reel`,
  "Active now",
  "Please 🙏",
];

const getRandomBooleanValue = Math.random() > 0.25;
const getAnotherRandomBooleanValue = Math.random() > 0.5;
const getRandomMessage =
  mockMessages[Math.floor(Math.random() * mockMessages.length)];
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-2 flex-grow">
      <StoryBox
        :avatar="avatar"
        size="md"
        :seen="getAnotherRandomBooleanValue"
      />

      <div
        class="flex flex-col text-sm leading-snug"
        :class="{
          'text-black': getRandomBooleanValue === false,
          'text-black/50': getRandomBooleanValue === true,
        }"
      >
        <span class="font-medium">{{ username }}</span>
        <span
          class="text-[0.95em]"
          :class="{
            'text-black/50': getRandomBooleanValue === true,
            'text-black': getRandomBooleanValue === false,
          }"
          >{{ getRandomMessage }}</span
        >
      </div>
    </div>

    <div class="text-[1.35rem] text-black/50 flex items-center space-x-4">
      <div
        v-if="getRandomBooleanValue === false"
        class="rounded-full bg-blue-600 h-2 w-2"
      />

      <CameraIcon />
    </div>
  </div>
</template>
