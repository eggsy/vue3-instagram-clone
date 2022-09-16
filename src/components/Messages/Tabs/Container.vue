<script lang="ts" setup>
import { ref } from "vue";
import TabsItem from "./Item.vue";

const items = ["Primary", "General", "Requests"];
const activeTab = ref(items[0]);
</script>

<template>
  <div class="grid grid-cols-3 text-center">
    <TabsItem
      v-for="item in items"
      :key="item"
      :label="item"
      :active="activeTab === item"
      @click.native="activeTab = item"
    />
  </div>
</template>
