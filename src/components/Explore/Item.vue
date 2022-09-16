<script lang="ts" setup>
// Icons
import IconMovie from "~icons/tabler/movie";
import IconPlay from "~icons/mdi/play";
import IconStack from "~icons/tabler/box-multiple";

withDefaults(
  defineProps<{
    image: string;
    type: "large" | "small" | "profile";
  }>(),
  {
    type: "small",
  }
);

const getRandomBooleanForComponentSelection = Math.random() > 0.5;
const getRandomBooleanValue = Math.random() > 0.7;
</script>

<template>
  <div class="relative text-white text-lg">
    <img
      :src="image"
      alt="explore post image"
      class="object-cover"
      :class="{
        'h-full w-full': type === 'profile',
        'h-28 w-[7.15rem]': type === 'small',
        'h-[14.05rem] w-full': type === 'large',
      }"
    />

    <Component
      :is="getRandomBooleanForComponentSelection ? IconStack : IconPlay"
      v-if="type !== 'large' && getRandomBooleanValue"
      class="absolute drop-shadow-md top-2 right-2"
    />

    <IconMovie
      v-if="type === 'large'"
      class="absolute drop-shadow-md bottom-2 left-2"
    />
  </div>
</template>
