<template>
  <div class="left" :class="'tw-bg-' + color">
    <div class="left-wrapper">
      <router-link class="logo" :to="{ name: 'home' }">
        <q-img class="img" :src="logo" />
      </router-link>
      <div class="name">{{ title }}</div>
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
