<template>
  <section v-if="slideData">
    <div class="title page-title">
      <p>{{slideData.title}}</p>
      
    </div>

    <div class="period">
      <div>{{slideData.week}}</div>
      <p>{{slideData.period}}</p>
    </div>
  </section>
</template>

<script>
// import Board from 'components/Board';
import DateTimeBar from 'components/Common/DateTimeBar';
import {mapGetters} from "vuex";
export default {
  name: 'PageIndex',
  components: {
    // Board,
    DateTimeBar,
  },
  computed:{
    ...mapGetters({
      slideData: "slideDataGetter"
    })
  }
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
