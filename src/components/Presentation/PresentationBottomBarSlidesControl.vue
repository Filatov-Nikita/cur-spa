<template>
  <div class="tw-flex tw-items-end">
    <div class="slides-control">
      <span class="slides-control--large">{{ current }}<span>/</span></span
      ><span class="slides-control--small">{{ total }}</span>
    </div>
    <PrestationControl @next="$emit('next')" @prev="$emit('prev')" />
  </div>
</template>

<script>
import PrestationControl from './PrestationControl';

export default {
  props: {
    current: {
      required: true,
      type: Number,
    },
    total: {
      required: true,
      type: Number,
    },
  },
  components: {
    PrestationControl,
  },
};
</script>

<style lang="scss" scoped>
//$
.slides-control {
  margin-right: convertValues(61px);
  padding-bottom: convertValues(10px);
  @apply tw-font-roboto tw-font-bold tw-text-white;
}

.slides-control--large {
  font-size: convertValues(100px);
}

.slides-control--small {
  font-size: convertValues(40px);
}
</style>
