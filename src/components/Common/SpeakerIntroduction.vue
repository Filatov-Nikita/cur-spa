<template>
  <div>
    <div class="page-title tw-uppercase title">{{ title }}</div>
    <board-separator v-space-m:bottom="'108px'" />
    <SpeakerCard size="lg" />
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
.title {
  margin-bottom: 76px;
}
</style>
