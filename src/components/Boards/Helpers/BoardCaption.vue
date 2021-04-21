<template>
  <div class="slide-text-caption tw-text-white" :style="{ 'max-width': wMax }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    },
    wMax: {
      default: '100%',
      type: String,
    },
  },
};
</script>

<style>
</style>
