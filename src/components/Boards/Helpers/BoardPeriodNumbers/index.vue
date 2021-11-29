<template>
  <div>
    <div class="tw-flex tw-items-center tw-mb-5">
      <q-icon
        v-if="iconChoice && period"
        size="3.125rem"
        :name="period"
        color="white"
        :style="{ 'margin-right': $toRem(offset) }"
      ></q-icon>
      <img
        v-else-if="period"
        :src="require('./icons/' + period + '.svg')"
        :style="{
          'margin-right': $toRem(offset),
          width: $toRem('50px'),
          height: $toRem('50px'),
        }"
      />
      <div class="slide-text-caption tw-text-white" v-if="label">
        {{ label }}
      </div>
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
      required: true,
      type: String,
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
    iconChoice: {
      default: false,
      type: Boolean,
    },
  },
  components: {
    BoardNumbers,
  },
};
</script>

<style>
</style>
