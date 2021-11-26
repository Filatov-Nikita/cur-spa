<template>
  <div v-if="text" class="slide-text-caption tw-text-white" :style="{ 'max-width': wMax }">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: undefined,
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
