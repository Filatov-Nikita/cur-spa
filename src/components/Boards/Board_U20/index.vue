<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="177"
      :t="109"
      :b="57"
      :r="177"
      :toPerc="['l']"
    >
      <board-text-body
        offset="60px"
        :icon="type.selectIconAtTheTop"
        :text="type.topText"
        v-space-m:bottom="'50px'"
      />
      <div class="text-description" v-html="type.bottomText"></div>
    </board-offsets>
  </board-cover>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: Object,
    },
  },
  computed: {
    items() {
      const { type } = this;
      return [
        {
          icon: type.iconColumn1,
          text: type.textColumn1,
        },
        {
          icon: type.iconColumn2,
          text: type.textColumn2,
        },
        {
          icon: type.iconColumn3,
          text: type.textColumn3,
        },
        {
          icon: type.iconColumn4,
          text: type.textColumn4,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
//$
.img-size {
  width: convertValues(257px);
  height: convertValues(257px);
}
.items {
  @apply tw-flex;
  margin: convertValues(0 -177px);
}

.item {
  @apply tw-w-1/4 tw-text-center;
  padding: convertValues(0 177px);
}
</style>
