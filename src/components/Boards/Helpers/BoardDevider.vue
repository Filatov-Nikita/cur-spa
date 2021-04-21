<template>
  <div class="container">
    <template v-if="!cols">
      <div class="left" :style="{ width: leftWidth }">
        <slot name="left" />
      </div>
      <div class="right" :style="{ width: rightWidth }">
        <slot name="right" />
      </div>
    </template>
    <template v-else>
      <template v-if="typeof cols === 'number'">
        <div
          v-for="number in cols"
          :key="number"
          :class="[`tw-w-1/${cols}`, number > 1 ? 'right' : '']"
        >
          <slot :name="`section${number}`" />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: 'BoardDevider',
  props: {
    cols: {
      default: undefined,
      validator(value) {
        if (value === undefined) return true;
        if (typeof value === 'number') return true;
        return (
          value instanceof Array &&
          value.length > 0 &&
          value.every((val) => typeof val === 'object')
        );
      },
    },
    leftWidth: {
      default: '50%',
      type: String,
    },
    rightWidth: {
      default: '50%',
      type: String,
    },
  },
};
</script>

<style scoped>
.container {
  @apply tw-flex;
}
.right {
  border-left: 1px solid var(--board-border-color);
}
</style>
