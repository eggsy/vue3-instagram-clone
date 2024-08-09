<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

// Icons
import IconCamera from "~icons/tabler/camera";
import IconMessage from "~icons/tabler/message-circle";
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
    class="flex fixed top-0 lg:w-[27.5%] mx-auto shadow-sm inset-x-0 items-center bg-white justify-between px-4 py-2 border-b border-[#DBDBDB]"
  >
    <RouterLink to="/camera">
      <IconCamera class="text-xl" />
    </RouterLink>

    <RouterLink to="/" class="font-satisfy text-xl text-center py-1">
      Instagram
    </RouterLink>

    <RouterLink to="/messages">
      <IconMessage class="text-xl" />
    </RouterLink>
  </nav>
</template>
