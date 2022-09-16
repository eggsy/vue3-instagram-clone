<script lang="ts" setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div
    class="bg-[#FFFFFE] min-h-screen text-black"
    :class="{
      'pt-12 pb-16': route.path === '/',
    }"
  >
    <slot />
  </div>
</template>
