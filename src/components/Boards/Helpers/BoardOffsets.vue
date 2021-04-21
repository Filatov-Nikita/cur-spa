<template>
  <div :style="calcOffset"><slot /></div>
</template>

<script>
export default {
  props: {
    width: {
      default: 0,
      type: Number,
    },
    l: {
      default: 0,
      type: Number,
    },
    t: {
      default: 0,
      type: Number,
    },
    b: {
      default: 0,
      type: Number,
    },
    r: {
      default: 0,
      type: Number,
    },
    toPerc: {
      default() {
        return [];
      },
      type: Array,
    },
  },
  computed: {
    calcOffset() {
      const positions = ['t', 'l', 'b', 'r'];
      const posDict = {
        t: 'top',
        l: 'left',
        b: 'bottom',
        r: 'right',
      };

      const styles = positions
        .filter((position) => this[position] !== 0)
        .reduce((acc, cur) => {
          if (this.toPerc.includes(cur)) {
            return {
              ...acc,
              [`padding-${posDict[cur]}`]:
                Math.round(this[cur] / (this.width / 100)) + '%',
            };
          }

          return { ...acc, [`padding-${posDict[cur]}`]: this[cur] + 'px' };
        }, {});
      return styles;
    },
  },
};
</script>

<style>
</style>
