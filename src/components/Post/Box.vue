<script lang="ts" setup>
import PostHeader from "./Header.vue";
import PostContent from "./Content.vue";
import PostControls from "./Controls.vue";

defineProps({
  username: {
    type: String,
    required: true,
    default: "",
  },
  image: {
    type: String,
    required: true,
    default: "",
  },
  avatar: {
    type: String,
    required: true,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  storySeen: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div class="w-full">
    <PostHeader :username="username" :avatar="avatar" :story-seen="storySeen" />
    <PostContent :image="image" />
    <PostControls :username="username" :description="description" />
  </div>
</template>
