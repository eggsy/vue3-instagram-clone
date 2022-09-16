<script lang="ts" setup>
import CameraHeader from "../components/Camera/Header.vue";
import CameraBottomMenu from "../components/Camera/BottomMenu.vue";
import CameraButton from "../components/Camera/Button.vue";
import CameraCenterMenu from "../components/Camera/CenterMenu.vue";
</script>

<template>
  <div class="bg-black flex flex-col px-4 py-6 text-white min-h-screen">
    <CameraHeader />

    <div class="flex-grow"></div>

    <CameraCenterMenu />
    <CameraButton />
    <CameraBottomMenu />
  </div>
</template>
