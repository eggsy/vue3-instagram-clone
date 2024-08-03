<script lang="ts" setup>
import { useDevicesList, useUserMedia } from "@vueuse/core";
import { computed, onBeforeMount, onMounted, watchEffect } from "vue";

// Components
import CameraHeader from "../components/Camera/Header.vue";
import CameraBottomMenu from "../components/Camera/BottomMenu.vue";
import CameraButton from "../components/Camera/Button.vue";
import CameraCenterMenu from "../components/Camera/CenterMenu.vue";

const { videoInputs: cameras } = useDevicesList({
    requestPermissions: true,
    constraints: {
        audio: false,
    },
});

const currentCamera = computed(
    () =>
        cameras.value.filter((item) => !/(iPhone|OBS)/g.test(item.label))?.[0]
            ?.deviceId,
);

const { stream, start, stop } = useUserMedia({
    constraints: {
        audio: false,
        video: { deviceId: currentCamera.value },
    },
});

onMounted(() => {
    start();
});

onBeforeMount(() => {
    stop();
});
</script>

<template>
    <div
        class="bg-black relative flex flex-col px-4 py-6 text-white min-h-screen"
    >
        <CameraHeader class="z-10" />

        <div class="flex-grow">
            <video
                v-if="stream"
                :srcObject="stream"
                autoplay
                playsinline
                class="absolute inset-0 h-full object-cover"
            />
        </div>

        <CameraCenterMenu class="z-10" />
        <CameraButton class="z-10" />
        <CameraBottomMenu class="z-10" />
    </div>
</template>
