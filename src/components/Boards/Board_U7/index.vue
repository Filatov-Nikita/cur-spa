<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="160"
          :t="100"
          :b="118"
          :r="87"
          :toPerc="['l']"
        >
          <board-text-body
            offset="67px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            textWMax="1139px"
            v-space-m:bottom="'27px'"
          />

          <board-numbers
            :value="type.valueColumn1"
            size="md"
            color="negative"
            showDynamic
            dynamic
          />

          <board-separator v-space-m:bottom="'73px'" />

          <board-caption
            :text="type.textAtTheBottomColumn1"
            wMax="903px"
            v-space-m:bottom="'23px'"
          />
          <board-numbers
            :value="type.valueInTheMiddleColumn1"
            size="sm"
            color="positive"
          />
        </board-offsets>
      </template>
      <template #right>
        <BoardSlider v-if="images" :images="images" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import BoardSlider from 'src/components/BoardSlider';
export default {
  components: { BoardSlider },
  props: {
    type: {
      required: true,
      type: Object,
    },
    images: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
</style>
<style lang="scss" scoped>
</style>
