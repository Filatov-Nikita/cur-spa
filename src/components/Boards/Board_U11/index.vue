<template>
  <board-cover v-if="type">
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="147" :t="109" :b="48" :toPerc="['l']">
          <board-text-body
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            textWMax="1040px"
            offset="90px"
            :text="type.topTextColumn1"
            v-space-m:bottom="'122px'"
          />

          <board-caption
            :text="type.textUnderTheIconColumn1"
            wMax="1070px"
          />

          <board-numbers
            :value="type.valueColumn1"
            color="negative"
            size="md"
            v-space-m:bottom="'149px'"
          />

          <board-caption
            :text="type.textAtTheBottomColumn1"
            wMax="1070px"
            v-space-m:bottom="'42px'"
          />

          <board-mapping-numbers
            :left="{ value: type.valueAtTheBottomLeftSideColumn1, color: 'positive', size: 'sm' }"
            :right="{ value: `${type.valueAtTheBottomRightSideColumn1}%`, color: 'white', size: 'xs' }"
            :arrowSize="243"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :width="1633" :l="114" :t="109" :b="78" :toPerc="['l']">
          <board-text-body
            iconChoice
            :icon="type.selectIconAtTheTopColumn2"
            :text="type.topTextColumn2"
            textWMax="906px"
            offset="62px"
            v-space-m:bottom="'132px'"
          />
          <board-caption
            :text="type.textUnderTheIconColumn2"
            wMax="1016px"
          />

          <board-numbers
            :value="type.valueColumn2"
            color="positive"
            size="md"
            v-space-m:bottom="'190px'"
          />

          <board-caption
            :text="type.textAtTheBottomColumn2"
            wMax="1016px"
            v-space-m:bottom="'42px'"
          />

          <board-mapping-numbers
            :left="{ value: type.valueAtTheBottomLeftSideColumn2, color: 'negative', size: 'sm' }"
            :right="{ value: `${type.valueAtTheBottomRightSideColumn2}%`, color: 'white', size: 'xs' }"
            :arrowSize="379"
          />
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  name: 'Board4',
  mixins: [currentSlideData],
}
</script>

<style>
</style>
