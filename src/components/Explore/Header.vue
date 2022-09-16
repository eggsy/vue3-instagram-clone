<script lang="ts" setup>
import SearchIcon from "~icons/tabler/search";
</script>

<template>
  <div class="w-full px-4 relative">
    <SearchIcon
      class="absolute inset-y-0 h-full left-6 text-sm text-black/30"
    />

    <input
      class="appearance-none w-full text-black outline-none bg-black/10 rounded-lg px-8 py-1 placeholder:text-black/30"
      placeholder="Search"
    />
  </div>
</template>
