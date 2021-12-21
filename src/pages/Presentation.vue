<template>
  <q-layout>
    <q-page-container>
      <PresentationVideoBackground :src="video" />
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <template v-if="slideData">
          <q-page v-if="!showSpeaker">
            <PresentationBuilder
              :type="type"
              :speaker="speaker"
              :slides="slides"
              :currentSlide="currentSlide"
              :color="color"
              :logo="logo"
              :name="name"
              @nextType="nextType"
              @showSpeaker="setSpeakerSlide"
            />
          </q-page>
          <Speaker
            v-else
            :type="type"
            :logo="logo"
            :name="name"
            :speaker="speaker"
            @prevType="prevType"
          />
        </template>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import PresentationBuilder from 'src/components/Presentation/PresentationBuilder';
import PresentationVideoBackground from 'src/components/Presentation/PresentationVideoBackground';
import Speaker from 'pages/Speaker';
import { mapGetters } from 'vuex';

const types = {
  medical: {
    name: 'Здравоохранение',
    video: 'videos/medicine.mp4',
    color: 'negative',
    logo: 'pres-logos/medical.svg',
    // временно
    speaker: {
      avatar: 'speakers/Забелин.png',
      name: 'Забелин Максим Васильевич',
      position:
        'Заместитель Премьер-министра Правительства Республики Башкортостан - министр здравоохранения',
    },
  },
  transport: {
    name: 'Транспорт и дорожное хозяйство',
    video: 'videos/transport.mp4',
    color: 'blue',
    logo: 'pres-logos/transport.svg',
    // временно
    speaker: {
      avatar: 'speakers/Жульков.jpg',
      name: 'Жульков Виктор Михайлович',
      position:
        'Исполняющий обязанности министра транспорта и дорожного хозяйства Республики Башкортостан',
    },
  },
  zkh: {
    name: 'Жилищно-коммунальное хозяйство',
    video: 'videos/hoz.mp4',
    color: 'orange',
    logo: 'pres-logos/hoz.svg',
    // временно
    speaker: {
      avatar: 'speakers/Голованова.jpg',
      name: 'Голованова Ирина Александровна',
      position:
        'Исполняющий обязанности министра жилищно-коммунального хозяйства Республики Башкортостан',
    },
  },
  emergency: {
    name: 'Чрезвычайные ситуации',
    video: 'videos/situations.mp4',
    color: 'green',
    logo: 'pres-logos/situations.svg',
    // временно
    speaker: {
      avatar: 'speakers/Гумеров.jpg',
      name: 'Гумеров Фарит Рифович',
      position:
        'Председатель Государственного комитета Республики Башкортостан по чрезвычайным ситуациям',
    },
  },
  universal: {
    name: ' Сельское хозяйство',
    video: 'videos/universal.mp4',
    color: 'blueSea',
    logo: 'pres-logos/sel.png',
    // временно
    speaker: {
      avatar: 'speakers/Фазрахманов.jpg',
      name: 'Фазрахманов Ильшат Ильдусович',
      position:
        'Заместитель Премьер-министра Правительства Республики Башкортостан - министр сельского хозяйства',
    },
  },
};

export default {
  props: {
    type: {
      required: true,
      type: String,
    },
    currentSlide: {
      default: 0,
      type: Number,
    },
    id: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      types,
    };
  },
  methods: {
    nextType() {
      if (!this.hasNext) return this.$router.push({ name: 'home' });

      this.$router.push({
        params: {
          currentSlide: 0,
          id: this.nextTypeId,
          type: this.nextTypeName,
        },
      });
    },
    setSpeakerSlide() {
      this.$router.push({
        params: { currentSlide: 0 },
      });
    },
    prevType() {
      if (!this.hasPrev) return this.$router.push({ name: 'home' });

      this.$router.push({
        params: {
          currentSlide: this.prevPres?.slides?.length,
          id: this.prevTypeId,
          type: this.prevTypeName,
        },
      });
    },
  },
  computed: {
    ...mapGetters({
      slideData: 'slideDataGetter',
    }),
    presentations() {
      return this.slideData?.presentations || [];
    },
    presMap() {
      return this.presentations.reduce((acc, pres) => {
        acc[pres.id] = pres;
        return acc;
      }, {});
    },
    presIndexMap() {
      return this.presentations.reduce((acc, pres, index) => {
        acc[pres.id] = index;
        return acc;
      }, {});
    },
    curPres() {
      return this.presMap[this.id];
    },
    slides() {
      return this.curPres?.slides;
    },
    logo() {
      return this.curPres?.department?.presentation_image?.url;
    },
    name() {
      return this.curPres?.department?.name;
    },
    speaker() {
      return this.curPres?.speaker;
    },
    curIndex() {
      return this.presIndexMap[this.id];
    },
    hasNext() {
      return this.curIndex + 1 < this.presentations.length;
    },
    hasPrev() {
      console.log(this.curIndex)
      console.log(this.curIndex  > 0)
      return this.curIndex > 0;
    },
    nextPres() {
      if (this.hasNext) return this.presentations[this.curIndex + 1];
      return null;
    },
    nextTypeId() {
      return this.nextPres?.id || null;
    },
    nextTypeName() {
      return this.nextPres?.type || null;
    },
    prevPres() {
      if (this.hasPrev) return this.presentations[this.curIndex - 1];
      return null;
    },
    prevTypeId() {
      return this.prevPres?.id || null;
    },
    prevTypeName() {
      return this.prevPres?.type || null;
    },
    curTypeParams() {
      return types[this.type] || types['medical'];
    },
    video() {
      return this.curTypeParams.video;
    },
    color() {
      return this.curTypeParams.color;
    },
    showSpeaker() {
      return this.currentSlide === 0;
    },
  },
  components: {
    PresentationBuilder,
    PresentationVideoBackground,
    Speaker,
  },
};
</script>
