<script lang="ts" setup>
import ActivityHeader from "../components/Activity/Header.vue";
import ActivityCard from "../components/Activity/Card.vue";
import ActivityContainer from "../components/Activity/Container.vue";
import ActivitySection from "../components/Activity/Section.vue";
</script>

<template>
  <div class="pt-6 pb-20 px-4">
    <ActivityHeader />

    <ActivityContainer>
      <ActivitySection title="Today">
        <ActivityCard
          v-for="item in 3"
          :key="`today-item-${item}`"
          :image="`https://picsum.photos/id/${item + 100}/200/200`"
        />
      </ActivitySection>

      <hr class="border-black/10" />

      <ActivitySection title="This week">
        <ActivityCard
          v-for="item in 10"
          :key="`today-item-${item}`"
          :image="`https://picsum.photos/id/${item + 400}/200/200`"
        />
      </ActivitySection>
    </ActivityContainer>
  </div>
</template>
