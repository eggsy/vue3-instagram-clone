<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

// Icons
import IconCamera from "~icons/tabler/camera";
import IconMessage from "~icons/tabler/message-circle";
import LogoInstagram from "~icons/logos/instagram";
import { onBeforeUnmount, onMounted } from "vue";

const route = useRoute();
const router = useRouter();

const handler = (event: KeyboardEvent) => {
  if (event.code === "ArrowLeft") router.push("/camera");
};

onMounted(() => {
  window.addEventListener("keydown", handler);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handler);
});
</script>

<template>
  <nav
    v-if="route.path === '/'"
    class="flex fixed top-0 lg:w-3/12 mx-auto shadow-sm inset-x-0 items-center bg-white justify-between px-4 py-2 border-b border-[#DBDBDB]"
  >
    <RouterLink to="/camera">
      <IconCamera class="text-xl" />
    </RouterLink>

    <RouterLink to="/">
      <LogoInstagram class="h-8 pt-1 w-24" />
    </RouterLink>

    <RouterLink to="/messages">
      <IconMessage class="text-xl" />
    </RouterLink>
  </nav>
</template>
