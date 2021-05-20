<template>
  <section>
    <div class="title page-title">
      <p>ОПЕРАТИВНОЕ СОВЕЩАНИЕ В ПРАВИТЕЛЬСТВЕ</p>
      <p>РЕСПУБЛИКИ БАШКОРТОСТАН</p>
    </div>

    <div class="period">
      <div>20 неделя</div>
      <div>10 мая 2021 - 16 мая 2021</div>
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
  margin-top: 417px;
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
