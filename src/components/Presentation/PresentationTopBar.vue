<template>
  <div class="top">
    <div class="top-wrapper">
      <div class="title">{{ title }}</div>
      <SpeakerCard v-space-p:top="'45px'"/>
    </div>
  </div>
</template>

<script>
import SpeakerCard from 'src/components/Common/SpeakerCard';

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
  components: {
    SpeakerCard,
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  padding-left: 300px;
}

.top-wrapper {
  padding-left: 113px;
  padding-right: 141px;
  @apply tw-flex tw-justify-between;
}

.title {
  font-size: 90px;
  padding-top: 104px;
  @apply tw-font-roboto tw-font-bold tw-text-white;
}
</style>
