<script lang="ts" setup>
import { ref } from "vue";

import IconGrid from "~icons/tabler/layout-grid";
import IconVideo from "~icons/tabler/video";
import IconTag from "~icons/tabler/tag";

const activeItemIndex = ref(0);

const items = [IconGrid, IconVideo, IconTag];
</script>

<template>
  <section class="grid grid-cols-3">
    <div
      v-for="(item, index) in items"
      :key="`profile-tab-${index}`"
      class="border-b border-black/10 py-2 select-none cursor-pointer text-sm hover:border-black/50 transition-colors"
      :class="{
        'border-black text-black': activeItemIndex === index,
        'text-black/50': activeItemIndex !== index,
      }"
      @click="activeItemIndex = index"
    >
      <component :is="item" class="text-2xl mx-auto" />
    </div>
  </section>
</template>
