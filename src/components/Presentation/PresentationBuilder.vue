<template>
  <div class="builder">
    <!-- <PresentationVideoBackground :src="video" /> -->
    <PresentationTopBar :title="slideTitle" :speaker="speaker" />
    <div class="board-container">
      <div class="board-wrapper">
        <transition enter-active-class="animated zoomIn slow" appear>
          <keep-alive>
            <component :is="board" />
          </keep-alive>
        </transition>
        <div
          v-space-m:top="'35px'"
          class="tw-font-pt-sans tw-text-white tw-text-right"
          style="font-size: 35px"
        >
          <p>20 неделя</p>
          <p>1 июня 2021 - 5 июня 2021</p>
        </div>
      </div>
    </div>
    <PresentationLeftBar :title="name" :color="color" :logo="logo" />
    <PresentationBottomBar
      @next="next"
      @prev="back"
      :current="current + 1"
      :total="slides.length"
    />
  </div>
</template>

<script>
import PresentationLeftBar from './PresentationLeftBar';
import PresentationTopBar from './PresentationTopBar';
import PresentationBottomBar from './PresentationBottomBar';
import PresentationVideoBackground from './PresentationVideoBackground';

/*
  Делаем нулевой слайд
  отслеживаем если слайд 0 то отображаем спикера
  ставим кип элайв для между этими комопонентами и отображаем нулевой слайд со спикером передавая пропсы
*/

export default {
  props: {
    type: {
      required: true,
      type: String,
    },
    slides: {
      required: true,
      type: Array,
    },
    currentSlide: {
      default: 1,
      type: Number,
    },
    color: {
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
  data() {
    return {
      current: this.currentSlide - 1,
    };
  },
  computed: {
    board() {
      const type = this.slides[this.current].type;
      const [left, boardNumber] = type.split('_');
      return () => import('src/components/Boards/Board_' + boardNumber);
    },
    slideTitle() {
      return this.slides[this.current].title;
    },
  },
  methods: {
    minMax(number) {
      return Math.max(0, Math.min(number, this.slides.length - 1));
    },
    next() {
      const prev = this.current;
      this.current = this.minMax(this.current + 1);
      if (prev === this.current) return this.$emit('nextType');
      this.$router.push({
        params: { ...this.$route.params, currentSlide: this.current + 1 },
      });
    },
    back() {
      const prev = this.current;
      this.current = this.minMax(this.current - 1);
      if (prev === this.current) return this.$emit('showSpeaker');
      this.$router.push({
        params: { ...this.$route.params, currentSlide: this.current + 1 },
      });
    },
  },
  components: {
    PresentationLeftBar,
    PresentationBottomBar,
    PresentationTopBar,
    PresentationVideoBackground,
  },
  watch: {
    currentSlide: {
      handler(value) {
        if (value - 1 > this.slides.length - 1) {
          this.current = 0;
          return this.$router.push({
            params: { ...this.$route.params, currentSlide: 1 },
          });
        } else {
          if (value !== this.current) {
            this.current = value - 1;
          }
        }
      },
      immediate: true,
    },
    type() {
      this.current = this.currentSlide - 1;
    },
  },
};
</script>
<style lang="scss" scoped>
//$
.board-container {
  padding-left: convertValues(300px);
  margin-top: convertValues(70px);
}

.board-wrapper {
  padding-left: convertValues(113px);
  padding-right: convertValues(161px);
}

.builder {
  padding-bottom: convertValues(200px);
}

.slow {
  animation-duration: 0.15s;
}
</style>
