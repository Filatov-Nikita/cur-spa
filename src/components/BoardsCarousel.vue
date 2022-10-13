<template>
  <q-carousel
    animated
    v-model="innerValue"
    height="100%"
    navigation
    infinite
    style="background-color: transparent"
  >
    <template v-slot:navigation-icon="{ active, btnProps, onClick }">
      <q-btn
        v-if="active"
        :size="$toRem('15px')"
        :icon="btnProps.icon"
        color="positive"
        flat
        round
        dense
        @click="onClick"
      />
      <q-btn
        v-else
        :size="$toRem('15px')"
        :icon="btnProps.icon"
        color="white"
        flat
        round
        dense
        @click="onClick"
      />
    </template>
    <slot />
  </q-carousel>
</template>

<script>
// import HoneycompMaker from 'src/components/Honeycomb/HoneycompMaker';

export default {
  props: {
    value: {
      required: true,
      type: [String, Number],
    },
    slides: {
      required: true,
      type: Array,
    },
    height: {
      default: "1351px",
      type: String,
    },
    onTheLeft: {
      default: false,
      type: Boolean,
    },
    controlClass: {
      default: "",
      type: String,
    },
    contentClass: {
      default: "",
      type: String,
    },
    wFull: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: "",
    };
  },
  created() {
    this.innerValue = this.value;
  },
  methods: {
    nextSlide() {
      this.$refs.slider.next();
    },
    previousSlide() {
      this.$refs.slider.previous();
    },
  },
  computed: {
    adaptHeight() {
      let h = this.height.match(/^\d*/g)[0];
      return this.$toRem(this.height);
    },
  },
  watch: {
    value(newVal) {
      if (newVal !== this.innerValue) this.innerValue = newVal;
    },
    innerValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
//$

// .carousel-center {
//   @apply tw-mx-auto;
// }

// .slider-button {
//   background: url(~assets/icons/slider-arrow.svg);
//   background-position: center;
//   background-size: cover;
// }

// .slider-button-right {
//   transform: rotate(180deg);
// }

//   .slider-button {
//     width: convertValues(140px);
//     height: convertValues(42px);
//   }
.controls {
  bottom: 5%;
  right: 50%;
  transform: translate(50%);
}
// .slider-r {
//   margin-left: convertValues(48px);;
// }
// .slider-l {
//   margin-right: convertValues(48px);;
// }
.controll {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
