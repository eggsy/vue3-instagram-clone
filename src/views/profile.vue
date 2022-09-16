<script lang="ts" setup>
import ProfileHeader from "../components/Profile/Header.vue";
import ProfileHeading from "../components/Profile/Heading.vue";
import ProfileUserDetails from "../components/Profile/UserDetails.vue";
import ProfileButtons from "../components/Profile/Buttons.vue";
import ProfileHighlights from "../components/Profile/Highlights.vue";
import ProfileTabs from "../components/Profile/Tabs.vue";
import ExploreContainer from "../components/Explore/Container.vue";
</script>

<template>
  <ProfileHeader />
  <ProfileHeading />
  <ProfileUserDetails />
  <ProfileButtons />
  <ProfileHighlights />
  <ProfileTabs />
  <ExploreContainer type="profile" class="pb-16" />
</template>
