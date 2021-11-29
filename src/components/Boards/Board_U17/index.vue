<template>
  <board-cover v-if="type">
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
        iconChoice
        :icon="type.selectIcon1"
        :text="type.topText"
        v-space-m:bottom="'308px'"
      />

      <div class="items">
        <div class="item" v-for="item in items" :key="item.text">
          <q-icon size="16.06rem" :name="item.icon" color="positive"></q-icon>
          <div class="slide-text-body tw-text-white">{{ item.text }}</div>
        </div>
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>
import currentSlideData from 'src/mixins/currentSlideData';

export default {
  mixins: [currentSlideData],
  computed: {
    items() {
      const { type } = this;
      return [
        {
          icon: type.selectIcon1,
          text: type.textUnderTheIcon1,
        },
        {
          icon: type.SelectIcon2,
          text: type.textUnderTheIcon2,
        },
        {
          icon: type.selectIcon3,
          text: type.textUnderTheIcon3,
        },
        {
          icon: type.selectIcon4,
          text: type.textUnderTheIcon4,
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
