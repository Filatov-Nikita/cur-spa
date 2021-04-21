<template>
  <div class="bottom">
    <div class="offset">
      <DateTimeBar />
      <PresentationBottomBarSlidesControl
        :total="total"
        :current="current"
        @next="$emit('next')"
        @prev="$emit('prev')"
      />
    </div>
  </div>
</template>

<script>
import DateTimeBar from 'src/components/Common/DateTimeBar';
import PresentationBottomBarSlidesControl from './PresentationBottomBarSlidesControl';

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
    DateTimeBar,
    PresentationBottomBarSlidesControl,
  },
};
</script>

<style scoped>
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-left: 300px;
}

.offset {
  padding-left: 115px;
  @apply tw-bg-primary tw-flex tw-justify-between tw-items-center;
}
</style>
