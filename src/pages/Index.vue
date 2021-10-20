<template>
  <section>
    <div class="title page-title">
      <p>ОПЕРАТИВНОЕ СОВЕЩАНИЕ В ПРАВИТЕЛЬСТВЕ</p>
      <p>РЕСПУБЛИКИ БАШКОРТОСТАН</p>
    </div>

    <div class="period">
      <div>20 неделя</div>
      <p>1 июня 2021 - 5 июня 2021</p>
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
<style lang="scss" scoped>
//$
.title {
  max-width: convertValues(1859px);
  margin-top: convertValues(417px);
  @apply tw-uppercase;
}

.period {
  max-width: convertValues(1431px);
  margin-top: convertValues(74px);
  font-size: convertValues(60px);
  opacity: 0.69;
  min-height: convertValues(271px);
  @apply tw-font-bold tw-font-pt-sans tw-text-white;
}
</style>
