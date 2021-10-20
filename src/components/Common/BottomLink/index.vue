<template>
  <button class="link" :class="{ 'link-flat': flat }" v-on="$listeners">
    <img class="icon" :src="require(`./icons/${icon}.svg`)" alt="" />
    <div>{{ label }}</div>
  </button>
</template>

<script>
export default {
  props: {
    flat: {
      default: false,
      type: Boolean,
    },
    label: {
      required: true,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.link {
  display: block;
  padding-left: convertValues(42px);
  padding-bottom: convertValues(33px);
  padding-top: convertValues(25px);
  padding-right: convertValues(26px);
  background: rgba(0, 9, 46, 0.77);
  border: 1px solid #ffffff;
  font-size: convertValues(50px);
  line-height: convertValues(65px);
  @apply tw-font-pt-sans tw-underline tw-text-white tw-flex tw-items-center;
}

.link-flat {
  background: transparent !important;
  border: none !important;
}

.icon {
  margin-right: convertValues(47px);
  width: convertValues(57px);
  height: convertValues(57px);
}
</style>
