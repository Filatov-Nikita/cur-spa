<template>
  <svg viewBox="0 0 21 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 2L8 12L2 5.78947" :stroke="color" :stroke-width="stroke" />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      required: true,
      type: String,
    },
    stroke: {
      required: true,
      type: Number,
    },
  },
};
</script>
