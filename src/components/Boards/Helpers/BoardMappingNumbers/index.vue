<template>
  <div>
    <board-caption v-if="label" :text="label" />
    <div class="mapnumbers">
      <BoardNumbers v-bind="left" />
      <div
        class="tw-flex tw-items-center"
        :class="`tw-self-${align}`"
        :style="{ 'padding-bottom': bottomSpace }"
      >
        <q-img
          class="arrow"
          ratio="1"
          src="./arrows/arrow-lg.svg"
          :style="{
            width: arrowSize + 'px',
            'margin-left': offset,
            'margin-right': offset,
          }"
          :position="position"
        />
        <BoardNumbers v-bind="right" />
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
      required: true,
      validator(left) {
        return left.value && left.color && left.size;
      },
    },
    right: {
      required: true,
      validator(left) {
        return left.value && left.color && left.size;
      },
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

<style scoped>
.mapnumbers {
  @apply tw-flex tw-items-end;
}

.arrow {
  align-self: center;
  height: 54px;
  flex-shrink: 0;
}
</style>
