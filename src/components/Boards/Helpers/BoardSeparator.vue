<template>
  <div class="separator" :style="{ 'max-width': wmax }"></div>
</template>
<script>
export default {
  name: 'BoardSeparator',
  props: {
    wmax: {
      default: '100%',
      type: String,
    },
  },
};
</script>
<style scoped>
.separator {
  border: 1px solid var(--board-border-color);
}
</style>
