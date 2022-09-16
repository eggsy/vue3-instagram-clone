<script lang="ts" setup>
import IconChevronDown from "~icons/tabler/chevron-down";
import IconLetters from "~icons/tabler/letter-case";
import IconInfinity from "~icons/tabler/infinity";
import IconLayout from "~icons/tabler/layout";
</script>

<template>
  <div
    class="absolute pointer-events-none text-white/90 font-light space-y-3 text-xs justify-center left-6 inset-y-0 my-auto flex flex-col"
  >
    <div class="flex items-center space-x-4">
      <IconLetters class="text-xl" />
      <span>Create</span>
    </div>

    <div class="flex items-center space-x-4">
      <IconInfinity class="text-xl" />
      <span>Boomerang</span>
    </div>

    <div class="flex items-center space-x-4">
      <IconLayout class="text-xl" />
      <span>Layout</span>
    </div>

    <IconChevronDown class="text-lg" />
  </div>
</template>
