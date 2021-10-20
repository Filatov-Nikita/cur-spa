<template>
  <router-link tag="li" :to="to" class="li">
    <div class="num">{{ index }}</div>
    <img class="icon" :src="`menu-icons/${icon}.png`" alt="" />
    <p class="text">{{ name }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    index: {
      default: '1',
      type: [String, Number],
    },
    to: { require: true },
    name: {
      required: true,
      type: String,
    },
    icon: { required: true, type: String },
  },
};
</script>

<style lang="scss" scoped>
//$
.li {
  width: convertValues(633px);
  min-height: convertValues(633px);
  padding-top: convertValues(123px);
  padding-left: convertValues(30px);
  padding-right: convertValues(30px);
  position: relative;
  border: 1px solid #ffffff;
  text-align: center;
  background: rgba(4, 16, 61, 0.92);
  backdrop-filter: blur(42px);
}

.li:nth-child(2n) {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: none;
}

.icon {
  width: convertValues(213px);
  height: convertValues(213px);
  display: block;
  @apply tw-mx-auto;
}

.num {
  position: absolute;
  top: -1px;
  left: -1px;
  width: convertValues(67px);
  height: convertValues(67px);
  color: #00092e;
  line-height: convertValues(67px) !important;
  @apply tw-bg-secondary tw-font-pt-sans tw-text-3xl tw-font-bold tw-text-center;
}

.text {
  margin-top: convertValues(67px);
  font-size: convertValues(40px);
  line-height: convertValues(52px);
  @apply tw-font-pt-sans tw-text-white;
}
</style>
