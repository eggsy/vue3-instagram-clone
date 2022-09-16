<script lang="ts" setup>
import { useRoute } from "vue-router";

// Components
import StoryBox from "./Story/Box.vue";

// Icons
import IconHome from "./Icons/Home.vue";
import IconSearchAlt from "~icons/tabler/search";
import IconPlusAlt from "~icons/tabler/circle-plus";
import IconHeartAlt from "~icons/tabler/heart";

const route = useRoute();
const filteredPages = ["/messages", "/camera"];
</script>

<template>
  <nav
    v-if="!filteredPages.includes(route.path)"
    class="fixed lg:w-3/12 border-t shadow-sm border-[#DBDBDB] mx-auto items-center bg-white inset-x-0 gap-x-8 bottom-0 py-2 px-4 flex text-2xl justify-evenly"
  >
    <RouterLink to="/">
      <IconHome :filled="route.path === '/'" />
    </RouterLink>

    <RouterLink to="/explore">
      <IconSearchAlt />
    </RouterLink>

    <IconPlusAlt />

    <RouterLink to="/activity">
      <IconHeartAlt />
    </RouterLink>

    <RouterLink to="/profile">
      <StoryBox
        avatar="https://i.imgur.com/7OXeSik.jpg"
        size="xs"
        :show-circle="false"
      />
    </RouterLink>
  </nav>
</template>
