<template>
  <div class="tw-flex" :class="`tw-items-${align}`">
    <q-icon
      v-if="iconChoice"
      size="8.25rem"
      :name="icon"
      color="white"
      :style="{ 'margin-right': $toRem(offset) }"
    ></q-icon>
    <img
      v-else="icon"
      class="img-size"
      :src="require('./icons/' + icon + '.svg')"
      :style="{ 'margin-right': $toRem(offset) }"
    />

    <div
      :class="`slide-text-${sizeText}`"
      :style="{ 'max-width': $toRem(textWMax) }"
    >
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
    iconChoice: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
//$
.img-size {
  width: convertValues(132px);
  height: convertValues(132px);
}
</style>
