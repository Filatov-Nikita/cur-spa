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
          :iconChoice="vital.iconChoice"
          :icon="vital.icon"
          :text="vital.label"
        />
      </slot>
      <div
        class="tw-flex-grow space"
        :style="{ 'margin-bottom': $toRem(vital.spaceOffset) || $toRem('43px') }"
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

<style lang="scss" scoped>
//$
.space {
  border-bottom: 1px dashed theme('colors.white');
}

.items {
  margin-top: convertValues(-35px);
}

.item {
  margin-top: convertValues(35px);
  margin-bottom: convertValues(35px);
}
</style>
