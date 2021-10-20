<template>
  <div>
    <div class="page-title tw-uppercase title">{{ title }}</div>
    <board-separator v-space-m:bottom="'108px'" />
    <SpeakerCard
      :name="speaker.name"
      :position="speaker.position"
      :avatar="speaker.avatar"
      size="lg"
    />
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
    speaker: {
      required: true,
      type: Object,
    },
  },
  components: {
    SpeakerCard,
  },
};
</script>

<style lang="scss" scoped>
//$
.title {
  margin-bottom: convertValues(76px);
}
</style>
