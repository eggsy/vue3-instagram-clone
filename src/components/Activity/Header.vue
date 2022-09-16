<script lang="ts" setup>
import IconChevronLeft from "~icons/tabler/chevron-left";
</script>

<template>
  <header>
    <RouterLink
      to="/"
      class="flex items-center space-x-2 text-xl font-semibold"
    >
      <IconChevronLeft />
      <span>Activity</span>
    </RouterLink>
  </header>
</template>
