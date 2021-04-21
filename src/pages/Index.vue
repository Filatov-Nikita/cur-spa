<template>
  <section>
    <div class="title page-title">
      ОПЕРАТИВНОЕ СОВЕЩАНИЕ В ПРАВИТЕЛЬСТВЕ РЕСПУБЛИКИ БАШКОРТОСТАН
    </div>

    <div class="period">
      <div>10 неделя</div>
      <div>01 марта 2021 - 07 марта 2021</div>
    </div>
  </section>
</template>

<script>
// import Board from 'components/Board';
import DateTimeBar from 'components/Common/DateTimeBar';

export default {
  name: 'PageIndex',
  components: {
    // Board,
    DateTimeBar,
  },
};
</script>
<style scoped>
.title {
  max-width: 1859px;
  margin-top: 455px;
  @apply tw-uppercase;
}

.period {
  max-width: 1431px;
  margin-top: 74px;
  font-size: 60px;
  opacity: 0.69;
  min-height: 271px;
  @apply tw-font-bold tw-font-pt-sans tw-text-white;
}
</style>
