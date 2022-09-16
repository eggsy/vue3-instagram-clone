<script setup lang="ts">
import StoryBox from "../Story/Box.vue";

withDefaults(
  defineProps<{
    avatar: string;
    username?: string;
    storySeen?: boolean;
  }>(),
  {
    storySeen: true,
  }
);
</script>

<template>
  <header class="flex items-center justify-between px-4 mb-2">
    <div class="flex items-center space-x-2">
      <StoryBox
        size="sm"
        :avatar="avatar"
        :seen="storySeen"
        :username="username"
        :put-username="false"
      />

      <span class="text-sm font-medium hover:underline cursor-pointer">
        {{ username }}
      </span>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
    </svg>
  </header>
</template>
