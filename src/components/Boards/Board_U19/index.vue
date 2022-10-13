<template>
  <board-cover>
    <BoardSlider v-if="images" :images="images" />
  </board-cover>
</template>

<script>
import BoardSlider from "src/components/BoardSlider";
export default {
  components: { BoardSlider },
  props: {
    images: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
