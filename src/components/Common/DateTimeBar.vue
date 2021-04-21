<template>
  <div class="text online-icon tw-flex tw-items-start">
    <div>
      <div>{{ date }}</div>
      <div>{{ time }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'DateTimeBar',
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

<style scoped>
.text {
  font-size: 50px;
  @apply tw-font-bold tw-font-pt-sans tw-text-white;
}

.text::before {
  width: 16px;
  height: 16px;
  margin-right: 35px;
  margin-top: 30px;
}
</style>
