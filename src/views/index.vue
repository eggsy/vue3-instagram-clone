<script setup lang="ts">
// Store
import useDataStore from "../store/data";

import StoryContainer from "../components/Story/Container.vue";
import StoryBox from "../components/Story/Box.vue";

import PostContainer from "../components/Post/Container.vue";
import PostBox from "../components/Post/Box.vue";

const store = useDataStore();
</script>

<template>
  <StoryContainer>
    <StoryBox
      v-for="(post, index) in store.data"
      :key="`story-${index}`"
      :username="post.user.nickname"
      :avatar="post.user.avatar"
      :seen="post.storySeen"
    />
  </StoryContainer>

  <PostContainer>
    <PostBox
      v-for="(post, index) in store.getRandomizedData"
      :key="`post-${index}`"
      :username="post.user.nickname"
      :avatar="post.user.avatar"
      :image="post.image"
      :description="post.description"
      :story-seen="post.storySeen"
    />
  </PostContainer>
</template>
