<template>
  <div class="top">
    <div class="top-wrapper">
      <div class="title">{{ title }}</div>
      <SpeakerCard
        :name="name"
        :position="speaker.position"
        :avatar="speaker.avatar"
        v-space-p:top="'45px'"
      />
    </div>
  </div>
</template>

<script>
import SpeakerCard from 'src/components/Common/SpeakerCard';

export default {
  props: {
    title: {
      default: undefined,
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
.top {
  width: 100%;
  padding-left: convertValues(300px);
}

.top-wrapper {
  padding-left: convertValues(113px);
  padding-right: convertValues(141px);
  @apply tw-flex tw-justify-between;
}

.title {
  font-size: convertValues(90px);
  padding-top: convertValues(104px);
  @apply tw-font-roboto tw-font-bold tw-text-white;
}
</style>
