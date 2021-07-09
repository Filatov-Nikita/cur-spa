<template>
  <div class="bottom">
    <div class="offset">
      <BottomMenu flat @toggleDoklad="chooseDoklad" />
      <div class="right">
        <DateTimeBar oneLine class="timebar" />
        <PresentationBottomBarSlidesControl
          :total="total"
          :current="current"
          @next="$emit('next')"
          @prev="$emit('prev')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DateTimeBar from 'src/components/Common/DateTimeBar';
import BottomMenu from 'src/components/Common/BottomMenu';
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
  methods: {
    chooseDoklad() {
      this.$router.push({ name: 'introduction', query: { open: true } });
    },
  },
  components: {
    BottomMenu,
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
  @apply tw-bg-primary tw-flex tw-justify-between tw-items-end;
}

.right {
  align-items: flex-end;
  display: flex;
}
.timebar {
  margin-right: 129px;
  padding-bottom: 30px;
}
</style>
