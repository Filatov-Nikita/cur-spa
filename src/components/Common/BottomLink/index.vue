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

<style scoped>
.link {
  display: block;
  padding-left: 42px;
  padding-bottom: 33px;
  padding-top: 25px;
  padding-right: 26px;
  background: rgba(0, 9, 46, 0.77);
  border: 1px solid #ffffff;
  font-size: 50px;
  line-height: 65px;
  @apply tw-font-pt-sans tw-underline tw-text-white tw-flex tw-items-center;
}

.link-flat {
  background: transparent !important;
  border: none !important;
}

.icon {
  margin-right: 47px;
}
</style>
