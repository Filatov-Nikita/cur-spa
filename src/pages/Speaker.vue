<template>
  <q-page class="page">
    <!-- <PresentationVideoBackground src="videos/medicine.mp4" /> -->
    <MainHeader />
    <div class="tw-flex tw-items-center container">
      <img
        class="presLogo"
        :src="logo"
        width="602px"
        height="733px"
        v-space-m:right="'437px'"
      />

      <SpeakerIntroduction
        class="speaker-card tw-w-full tw-self-center"
        :title="name"
        :speaker="speaker"
      />
    </div>

    <div></div>
    <PrestationControl
      class="bottom"
      @next="$router.push({ params: { currentSlide: 1 } })"
      @prev="$emit('prevType')"
    />
  </q-page>
</template>

<script>
import MainHeader from 'layouts/parts/MainHeader';
import PresentationVideoBackground from 'src/components/Presentation/PresentationVideoBackground';
import PrestationControl from 'src/components/Presentation/PrestationControl';
import SpeakerIntroduction from 'src/components/Common/SpeakerIntroduction';

export default {
  props: {
    type: {
      required: true,
      type: String,
    },
    logo: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    speaker: {
      required: true,
      type: Object,
    },
  },
  components: {
    MainHeader,
    PresentationVideoBackground,
    PrestationControl,
    SpeakerIntroduction,
  },
};
</script>

<style scoped>
.bottom {
  position: fixed;
  bottom: 0;
  right: 0;
}

.speaker-card {
  max-width: 1918px;
}

.title {
  margin-bottom: 76px;
}

.presLogo {
  max-width: 602px;
  height: auto;
  flex-shrink: 0;
}

.container {
  max-width: 2896px;
  margin-top: 23vh;
  @apply tw-mx-auto;
}

.page {
  padding-bottom: 200px;
}
</style>
