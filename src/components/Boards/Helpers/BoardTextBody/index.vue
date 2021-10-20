<template>
  <div class="tw-flex" :class="`tw-items-${align}`">
    <img
      :src="require('./icons/' + icon + '.svg')"
      :style="{ 'margin-right': $toRem(offset) }"
    />
    <div :class="`slide-text-${sizeText}`" :style="{ 'max-width': $toRem(textWMax) }">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardTextBody',
  props: {
    text: {
      required: true,
      type: String,
    },
    sizeText: {
      default: 'body',
      type: String,
    },
    textWMax: {
      default: '100%',
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    offset: {
      require: true,
      type: String,
    },
    align: {
      default: 'center',
      type: String,
    },
  },
};
</script>
