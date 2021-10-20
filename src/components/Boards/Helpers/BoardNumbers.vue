<template>
  <div v-if="!showDynamic" :class="[colorClass, textSize]">
    <animated-number
      :round="0"
      v-if="!replaceValue"
      :value="cleanValue"
      :duration="400"
      :complete="complete"
      :formatValue="formatToPrice"
    />
    <span v-else>{{ value }}</span>
  </div>
  <div v-else class="numbers" :class="{ down: !dynamic }">
    <template v-if="value">
      <animated-number
        :round="0"
        v-if="!replaceValue"
        :value="cleanValue"
        :duration="300"
        :complete="complete"
        :formatValue="formatToPrice"
        class="value"
        :class="[colorClass, textSize]"
        :style="{ 'margin-right': arrowOffset }"
      />
      <span
        v-else
        class="value"
        :class="[colorClass, textSize]"
        :style="{ 'margin-right': $toRem(arrowOffset) }"
        >{{ value }}</span
      >
    </template>
    <slot v-else-if="$slots.default" />
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue';

export default {
  name: 'BoardNumbers',
  inheritAttrs: false,
  props: {
    dynamic: {
      default: false,
      type: Boolean,
    },
    color: {
      default: 'white',
      type: String,
    },
    value: {
      default: undefined,
      type: String,
    },
    size: {
      default: 'sm',
      type: String,
    },
    arrowOffset: {
      default: '28px',
      type: String,
    },
    showDynamic: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      replaceValue: false,
    };
  },
  computed: {
    colorClass() {
      return 'tw-text-' + this.color;
    },
    textSize() {
      return 'slide-text-' + this.size;
    },
    cleanValue() {
      return this.value.replace(/[^0-9.]/g, '');
    },
  },
  methods: {
    formatToPrice(value) {
      return `${Math.round(Number(value))}`;
    },
    complete(a) {
      this.replaceValue = true;
    },
  },
  components: {
    AnimatedNumber,
  },
};
</script>

<style lang="scss" scoped>
//$
.down::after {
  transform: rotate(180deg);
}

.numbers::after {
  content: '';
  display: inline-block;
  width: conertValues(60px);
  height: conertValues(60px);
  background: url(../icons/position-arrow.svg) no-repeat;
}
.numbers {
  white-space: nowrap;
}
.value {
  display: inline-block;
}
</style>
