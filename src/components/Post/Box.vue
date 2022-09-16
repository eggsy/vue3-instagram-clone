<script lang="ts" setup>
import PostHeader from "./Header.vue";
import PostContent from "./Content.vue";
import PostControls from "./Controls.vue";

defineProps<{
  username: string;
  image: string;
  avatar: string;
  description?: string;
  storySeen?: boolean;
}>();
</script>

<template>
  <div class="w-full">
    <PostHeader :username="username" :avatar="avatar" :story-seen="storySeen" />
    <PostContent :image="image" />
    <PostControls :username="username" :description="description" />
  </div>
</template>
