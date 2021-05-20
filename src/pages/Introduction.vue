<template>
  <section class="speaker-card tw-w-full tw-self-center">
    <SpeakerIntroduction
      :speaker="speaker"
      title="Вступительное слово"
      style="max-width: 1628px; margin-top: 456px"
    />
  </section>
</template>

<script>
import SpeakerIntroduction from 'src/components/Common/SpeakerIntroduction';

export default {
  data() {
    return {
      speaker: {
        name: 'Назаров Андрей Геннадьевич',
        position: 'Премьер-министр Правительства Республики Башкортостан',
        avatar: 'speakers/Назаров.jpg',
      },
    };
  },
  components: {
    SpeakerIntroduction,
  },
};
</script>

<style>
</style>
