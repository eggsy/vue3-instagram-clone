<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core";
import { watchEffect } from "vue";
import { ref } from "vue";

const isDismissed = useLocalStorage("affiliation-notice-dismissed", false);

const dialogRef = ref<HTMLDialogElement>();

watchEffect(() => {
  if (isDismissed.value) {
    dialogRef.value?.close();
    return;
  }

  dialogRef.value?.showModal();
});
</script>

<template>
  <dialog
    ref="dialogRef"
    class="text-sm p-6 lg:w-1/4 w-11/12 rounded-2xl backdrop:bg-black/70 space-y-3"
    @close="isDismissed = true"
  >
    <h3 class="text-lg font-medium">Disclaimer!</h3>

    <p class="text-gray-800">
      This is a clone of Instagram built with Vue 3 and Tailwind CSS. It is a
      personal project for learning purposes. It is not intended for commercial
      use. It is
      <a
        href="https://github.com/eggsy/vue3-instagram-clone"
        target="_blank"
        rel="noreferrer noopener"
        class="text-blue-500 hover:text-blue-600 outline-none"
      >
        open source on GitHub: eggsy/vue3-instagram-clone.
      </a>

      <span class="font-bold">
        This app is not affiliated with Instagram or Meta Platforms, Inc.
      </span>
    </p>

    <button
      type="button"
      class="bg-gray-200 hover:bg-gray-300 transition-colors rounded-xl px-4 py-2"
      @click="isDismissed = true"
    >
      I Understand
    </button>
  </dialog>

  <span
    v-if="isDismissed"
    class="hidden lg:block fixed bottom-4 right-4 text-xs text-white/40"
  >
    This app is not affiliated with Instagram or Meta Platforms, Inc.
  </span>
</template>
