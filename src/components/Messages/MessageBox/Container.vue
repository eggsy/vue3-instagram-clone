<script lang="ts" setup>
import data from "../../../data";

// Components
import Message from "./Message.vue";
</script>

<template>
  <div class="flex py-4 px-4 flex-col space-y-3">
    <Message
      v-for="person in data"
      :key="person.user.nickname"
      :username="person.user.nickname"
      :avatar="person.user.avatar"
    />
  </div>
</template>
