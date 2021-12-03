<template>
  <BoardsCarousel
    v-if="images.length > 1"
    v-model="innerValue"
    :slides="images"
  >
    <q-carousel-slide
      v-for="(slide, index) in images"
      :key="index"
      :name="index"
    >
      <q-img
        :src="slide.url"
        width="100%"
        height="100%"
        style="max-height: 95rem"
      />
    </q-carousel-slide>
  </BoardsCarousel>
  <q-img
    v-else-if="images.length === 1"
    :src="images[0].url"
    width="100%"
    height="100%"
    style="max-height: 95rem"
  />
</template>

<script>
import BoardsCarousel from 'src/components/BoardsCarousel';
export default {
  components: { BoardsCarousel },
  name: 'BoardSlide',
  props: {
    value: {
      default: 0,
      type: [String, Number],
    },
    images: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      innerValue: 0,
    };
  },
  created() {
    this.innerValue = this.value;
  },
  watch: {
    value(newVal) {
      if (newVal !== this.innerValue) this.innerValue = newVal;
    },
    innerValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>
