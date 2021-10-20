<template>
  <div class="text online-icon tw-flex tw-items-start">
    <div :class="oneLine ? ['tw-flex'] : ''">
      <div :class="{ 'tw-order-1': oneLine }">{{ date }}</div>
      <div :class="{ 'tw-mr-4': oneLine }">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateTimeBar',
  props: {
    oneLine: {
      default: false,
      type: Boolean,
    },
  },
  created() {
    // ** погрешность во времени из-за того что создание компонента необязательно произойдет в первую секунду отсчета новой минуты
    this.set();
    this.ticker = setInterval(() => {
      this.set();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.ticker);
  },
  data() {
    return {
      ticker: null,
      date: '',
      time: '',
    };
  },
  methods: {
    set() {
      this.date = moment().format('DD MMMM YYYY [г.]');
      this.time = moment().format('HH:mm');
    },
  },
};
</script>

<style lang='scss' scoped>
//$
.text {
  font-size: convertValues(50px);
  @apply tw-font-bold tw-font-pt-sans tw-text-white;
}

.text::before {
  width: convertValues(16px);
  height: convertValues(16px);
  margin-right: convertValues(35px);
  margin-top: convertValues(30px);
}
</style>
