<script lang="ts" setup>
// Components
import ExploreItem from "./Item.vue";

const props = withDefaults(
  defineProps<{
    type?: "profile" | "explore";
  }>(),
  {
    type: "explore",
  }
);

const getItemCount = () => {
  if (props.type === "profile") return 3;
  else return 4;
};
</script>

<template>
  <div
    class="space-y-px"
    :class="{
      'pt-4': type === 'explore',
      'pt-1': type === 'profile',
    }"
  >
    <div
      v-for="index in 6"
      :key="`wrapper-${index}`"
      class="flex gap-px"
      :class="{
        'overflow-x-hidden': type === 'explore',
        'flex-row-reverse': type === 'explore' && index % 2 === 0,
      }"
    >
      <div
        class="grid gap-px"
        :class="{
          'grid-cols-2 flex-shrink-0 grid-rows-2 place-items-stretch':
            type === 'explore',
          'grid-cols-3': type === 'profile',
        }"
      >
        <ExploreItem
          v-for="i in getItemCount()"
          :key="i"
          :image="`https://picsum.photos/id/${index}${i}/200/200`"
          :type="type === 'profile' ? 'profile' : 'small'"
        />
      </div>

      <ExploreItem
        v-if="type === 'explore'"
        type="large"
        :image="`https://picsum.photos/id/${index}/1000/1000`"
      />
    </div>
  </div>
</template>
