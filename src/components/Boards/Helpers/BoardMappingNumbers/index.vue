<template>
  <div>
    <board-caption v-if="label" :text="label" />
    <div class="mapnumbers">
      <BoardNumbers v-if="left" v-bind="left" />
      <div
        class="tw-flex tw-items-center"
        :class="`tw-self-${align}`"
        :style="{ 'padding-bottom': $toRem(bottomSpace)}"
      >
        <q-img
          class="arrow"
          ratio="1"
          src="./arrows/arrow-lg.svg"
          :style="{
            width: $toRem(arrowSize),
            'margin-left': $toRem(offset),
            'margin-right': $toRem(offset),
          }"
          :position="position"
        />
        <BoardNumbers v-if="right " v-bind="right" />
      </div>
    </div>
  </div>
</template>

<script>
import BoardNumbers from '../BoardNumbers';

export default {
  name: 'BoardMappingNumbers',
  props: {
    arrowSize: {
      default: 208,
      type: Number,
    },
    offset: {
      default: '48px',
      type: String,
    },
    align: {
      default: 'center',
      type: String,
    },
    bottomSpace: {
      default: '0px',
      type: String,
    },
    left: {
      default: null,
      type: Object,
      // validator(left) {
      //   return left.value && left.color && left.size;
      // },
    },
    right: {
            default: null,
      type: Object,
      // required: true,
      // validator(left) {
      //   return left.value && left.color && left.size;
      // },
    },
    label: {
      default: undefined,
      type: String,
    },
  },
  computed: {
    position() {
      if (this.arrowSize >= 640) return '-100% 50%';
      return '100% 50%';
    },
  },
  components: {
    BoardNumbers,
  },
};
</script>

<style lang="scss" scoped>
//$
.mapnumbers {
  @apply tw-flex tw-items-end;
}

.arrow {
  align-self: center;
  height: convertValues(54px);
  flex-shrink: 0;
}
</style>
