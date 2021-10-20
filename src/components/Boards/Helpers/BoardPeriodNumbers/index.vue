<template>
  <div>
    <div class="tw-flex tw-items-center tw-mb-5">
      <img
        :src="require('./icons/' + period + '.svg')"
        :style="{ 'margin-right': $toRem(offset), width: $toRem('50px'), height: $toRem('50px') }"
      />
      <div class="slide-text-caption tw-text-white">{{ label }}</div>
    </div>
    <BoardNumbers v-bind="valueStg" />
  </div>
</template>

<script>
import BoardNumbers from '../BoardNumbers';

export default {
  name: 'BoardPeriodNumbers',
  props: {
    period: {
      default: 'day',
      validator(value) {
        return ['day', 'week', 'month', 'year'].includes(value);
      },
    },
    label: {
      required: true,
      type: String,
    },
    valueStg: {
      required: true,
      type: Object,
    },
    offset: {
      default: '39px',
      type: String,
    },
  },
  components: {
    BoardNumbers,
  },
};
</script>

<style>
</style>
