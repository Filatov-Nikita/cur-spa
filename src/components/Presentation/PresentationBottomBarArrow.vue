<template>
  <div class="arrow" :class="`arrow-${position}`" v-on="$listeners"></div>
</template>

<script>
export default {
  props: {
    position: {
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.arrow {
  width: 200px;
  height: 200px;
  transition: background-color, 0.3s;
  cursor: pointer;
  @apply tw-bg-secondary;
}

.arrow-right {
  transform: rotate(180deg);
}

.arrow::after {
  content: '';
  display: block;
  background: url(~assets/arrow.svg) center no-repeat;
  width: 100%;
  height: 100%;
}

.arrow:hover {
  background-color: #0cbd73;
}

.arrow:active,
.arrow-active {
  background-color: #0b9b5f;
}
</style>
