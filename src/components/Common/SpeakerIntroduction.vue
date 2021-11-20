<template>
  <div>
    <div class="page-title tw-uppercase title">{{ title }}</div>
    <board-separator v-space-m:bottom="'108px'" />
    <SpeakerCard
      :name="name"
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
  computed:{
    name(){
      return this.speaker.last_name + ' '+ this.speaker.first_name
    }
  }
};
</script>

<style lang="scss" scoped>
//$
.title {
  margin-bottom: convertValues(76px);
}
</style>
