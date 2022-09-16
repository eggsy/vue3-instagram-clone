<script lang="ts" setup>
import ChevronLeft from "~icons/tabler/chevron-left";
import ChevronDown from "~icons/tabler/chevron-down";
import ListIcon from "~icons/tabler/list";
import DocumentIcon from "~icons/tabler/file-pencil";
import SearchIcon from "~icons/tabler/search";
import SettingsIcon from "~icons/tabler/adjustments-horizontal";

const username = "eggsy_dev";
</script>

<template>
  <header class="flex flex-col px-2 py-4 space-y-4">
    <nav class="flex items-center justify-between space-x-2">
      <div class="flex items-center space-x-1">
        <RouterLink to="/">
          <ChevronLeft class="text-2xl" />
        </RouterLink>

        <div class="flex items-center space-x-1">
          <RouterLink to="/">
            <span class="font-semibold text-lg">{{ username }}</span>
          </RouterLink>
          <ChevronDown class="text-xs" />
        </div>
      </div>

      <div class="text-2xl flex items-center space-x-4">
        <ListIcon />
        <DocumentIcon />
      </div>
    </nav>

    <div class="w-full px-2 relative">
      <SearchIcon
        class="absolute inset-y-0 h-full left-4 text-sm text-black/30"
      />

      <input
        class="appearance-none w-full text-black outline-none bg-black/10 rounded-lg px-8 py-1 placeholder:text-black/30"
        placeholder="Search"
      />

      <SettingsIcon
        class="absolute right-5 inset-y-0 h-full text-sm text-black/30"
      />
    </div>
  </header>
</template>
