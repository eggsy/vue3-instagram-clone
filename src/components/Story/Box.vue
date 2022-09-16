<script lang="ts" setup>
import useDataStore from "../../store/data";

const props = withDefaults(
  defineProps<{
    avatar?: string;
    seen?: boolean;
    username?: string;
    size?: "normal" | "sm" | "xs" | "md" | "lg";
    showCircle?: boolean;
    putUsername?: boolean;
    contrast?: boolean;
  }>(),
  {
    size: "normal",
    showCircle: true,
    putUsername: true,
  }
);

const store = useDataStore();

const handleStoryBoxClick = () => {
  if (!props.username) return;
  store.toggleStorySeen(props.username);
};
</script>

<template>
  <div class="flex-shrink-0 flex flex-col items-center cursor-pointer">
    <div
      class="rounded-full p-0.5 flex flex-col space-y-1"
      :class="{
        'from-purple-600 bg-gradient-to-bl via-red-600 to-yellow-500':
          seen === false && showCircle === true,
        'bg-gray-200': seen === true && showCircle === true,
      }"
      @click="handleStoryBoxClick"
    >
      <img
        :src="`https://proxy.duckduckgo.com/iu/?u=${avatar}`"
        alt="profile image"
        class="object-cover rounded-full"
        :class="{
          'w-[100px] h-[100px]': size === 'lg',
          'w-[65px] h-[65px]': size === 'normal',
          'w-[55px] h-[55px]': size === 'md',
          'w-[40px] h-[40px]': size === 'sm',
          'w-[30px] h-[30px]': size === 'xs',
          'border-2 border-white': showCircle === true,
        }"
        loading="lazy"
        draggable="false"
      />
    </div>

    <span
      v-if="putUsername && username"
      class="text-sm"
      :class="{
        'text-black text-xs': contrast === true,
        'text-black/50': !contrast && seen === true,
        'text-black/75': !contrast && seen === false,
      }"
    >
      {{ username }}
    </span>
  </div>
</template>
