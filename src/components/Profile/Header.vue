<script lang="ts" setup>
import ChevronDown from "~icons/tabler/chevron-down";
import PlusIcon from "~icons/tabler/square-plus";
import MenuIcon from "~icons/tabler/menu-2";

const username = "eggsy_dev";
</script>

<template>
  <header
    class="p-4 flex border-b border-black/10 items-center gap-4 justify-between"
  >
    <h1 class="font-semibold text-xl">
      {{ username }}
      <ChevronDown class="text-sm inline" />
    </h1>

    <div class="flex text-2xl items-center space-x-2">
      <PlusIcon />
      <MenuIcon />
    </div>
  </header>
</template>
