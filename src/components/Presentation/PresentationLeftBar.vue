<template>
  <div class="left" :class="'tw-bg-' + color" ref="left">
    <div class="left-wrapper">
      <div ref="svg">
        <router-link class="logo" :to="{ name: 'home' }">
          <q-img class="img" :src="logo" />
        </router-link>
      </div>
      <div class="name" ref="title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    color: {
      required: true,
      type: String,
    },
    logo: {
      required: true,
      type: String,
    },
  },
  mounted() {
    const parentHeight = this.$refs.left.getBoundingClientRect().height;
    const svgHeight = this.$refs.svg.getBoundingClientRect().height;
    const difference = parentHeight - svgHeight;
    const titleEl = this.$refs.title;
    const titleHeight = titleEl.getBoundingClientRect().height;
    const initFontSizeEl = getStyle(titleEl, "font-size");

    let fontsS = initFontSizeEl.replace(/[^\d][^.\d]/g, "");

    while (difference < titleEl.getBoundingClientRect().height) {
      let offset = 2;
      fontsS -= offset;
      titleEl.style.fontSize = fontsS + "px";
    }

    function getStyle(el, styleProp) {
      let camelize = function (str) {
        return str.replace(/\-(\w)/g, function (str, letter) {
          return letter.toUpperCase();
        });
      };

      if (el.currentStyle) {
        return el.currentStyle[camelize(styleProp)];
      } else if (
        document.defaultView &&
        document.defaultView.getComputedStyle
      ) {
        return document.defaultView
          .getComputedStyle(el, null)
          .getPropertyValue(styleProp);
      } else {
        return el.style[camelize(styleProp)];
      }
    }
  },
};
</script>

<style lang="scss" scoped>
//$
.left {
  width: convertValues(300px);
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

.name {
  font-size: convertValues(100px);
  padding-left: convertValues(74px);
  z-index: 1;
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: rotate(-90deg) translate(100%, 50%);
  white-space: nowrap;
  transform-origin: right bottom;
  @apply tw-text-white tw-font-roboto tw-font-bold;
}
.left-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.logo {
  width: convertValues(300px);
  height: convertValues(300px);
  @apply tw-bg-primary tw-relative tw-block;
}

.img {
  width: convertValues(163px);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
