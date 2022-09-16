<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from "vue";
import { useRouter } from "vue-router";

// Icons
import IconX from "~icons/tabler/X";
import IconLightning from "~icons/mdi/lightning-bolt";
import IconSettings from "~icons/tabler/settings";

const router = useRouter();

const handler = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    router.push("/");
  }
};

onMounted(() => {
  window.addEventListener("keydown", handler);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handler);
});
</script>

<template>
  <div class="flex text-2xl items-center justify-between">
    <RouterLink to="/">
      <IconX />
    </RouterLink>

    <IconLightning />
    <IconSettings />
  </div>
</template>
