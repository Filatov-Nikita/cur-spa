<template>
  <div class="items">
    <div
      v-for="vital in vitals"
      class="tw-flex item"
      :class="`tw-items-${align}`"
    >
      <slot name="label" :label="vital.label">
        <board-text-body
          v-bind="textOptions"
          :icon="vital.icon"
          :text="vital.label"
        />
      </slot>
      <div
        class="tw-flex-grow space"
        :style="{ 'margin-bottom': vital.spaceOffset || '43px' }"
      ></div>
      <board-numbers
        v-if="vitalType === 'numbers'"
        :value="vital.value"
        size="xs"
        color="negative"
      />
      <board-mapping-numbers
        v-else-if="vitalType === 'mapping'"
        v-bind="vital.options"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textOptions: {
      default: () => ({
        offset: '57px',
        sizeText: 'caption',
      }),
      type: Object,
    },
    vitalType: {
      default: 'numbers',
      type: String,
    },
    vitals: {
      required: true,
      type: Array,
    },
    align: {
      default: 'end',
      type: String,
    },
  },
};
</script>

<style scoped>
.space {
  border-bottom: 1px dashed theme('colors.white');
}

.items {
  margin-top: -35px;
}

.item {
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
