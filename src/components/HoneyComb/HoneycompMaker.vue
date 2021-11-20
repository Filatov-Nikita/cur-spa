<template>
  <div class="tw-inline-block" :style="offsetsStyles" v-on="$listeners">
    <div
      v-bind="$attrs"
      class="honeycomb"
      :class="[`tw-bg-${color} tw-border-${color}`, contentClass]"
      :style="honeycompStyles"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      ratio: 0.866, //(482 / 566) w / h
      pRatio: 1.733, // (482 / 268)
    };
  },
  props: {
    color: {
      required: true,
      type: String,
    },
    w: {
      required: true,
      type: Number,
    },
    contentClass: {
      default: '',
      type: String,
    },
  },
  computed: {
    h() {
      const { w, ratio } = this;
      return w / ratio;
    },
    triangleH() {
      const { w, pRatio } = this;
      return w / pRatio / 2;
    },
    pH() {
      const { h, triangleH } = this;
      return h - triangleH * 2;
    },
    //unused
    triangleG() {
      const { w, triangleH: k2 } = this;
      const k1 = w / 2;
      const pow = Math.pow;
      return Math.sqrt(pow(k1, 2) + pow(k2, 2));
    },
    triangleSide() {
      const { w } = this;
      return w / 2;
    },
    honeycompStyles() {
      const { w: width, triangleSide, triangleH, pH: height, color } = this;
      
      return {
        width: width +'px',
        height: height+'px',
        '--side-g': triangleSide+'px',
        '--side-h': triangleH+'px',
      };
    },
    offsetsStyles() {
      const { triangleH } = this;
      return {
        'padding-top': triangleH+'px',
        'padding-bottom': triangleH+'px',
      };
    },
  },
};
</script>

<style scoped lang="scss">
//$
.honeycomb {
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: convertValues(50px);
  height: convertValues(50px);
  background-color: red;
}

.honeycomb::after,
.honeycomb::before {
  content: '';
  position: absolute;
  width: 0;
  left: 0;
  border-left: var(--side-g) solid transparent;
  border-right: var(--side-g) solid transparent;
}

.honeycomb::before {
  bottom: 100%;
  border-bottom-width: var(--side-h);
  border-bottom-style: solid;
  border-bottom-color: inherit;
}

.honeycomb::after {
  top: 100%;
  border-top-width: var(--side-h);
  border-top-style: solid;
  border-top-color: inherit;
}


</style>
