<template>
  <board-cover>
    <board-devider :cols="3">
      <template #section1>
        <board-offsets :l="119" :t="100" :b="76" :r="92">
          <board-text-body
            offset="71px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            sizeText="caption"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn1"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            :label="type.middleTextColumn1"
            iconChoice
            :period="type.selectIconInTheMiddleOfColumn1"
            :valueStg="{
              color: 'negative',
              value: type.valueInTheMiddleColumn1,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            :text="type.textAtTheBottomColumn1"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.valueAtTheBottomLeftSideColumn1, size: 'xs' }"
            :right="{ color: 'white', value: `${type.valueAtTheBottomRightSideColumn1}%`, size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section2>
        <board-offsets :l="115" :t="107" :b="76" :r="98">
          <board-text-body
            offset="80px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn2"
            :text="type.topTextColumn2"
            sizeText="caption"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn2"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            :label="type.middleTextColumn2"
            iconChoice
            :period="type.selectIconInTheMiddleOfColumn2"
            :valueStg="{
              color: 'negative',
              value: type.valueInTheMiddleColumn2,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            :text="type.textAtTheBottomColumn2"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.valueAtTheBottomLeftSideColumn2, size: 'xs' }"
            :right="{ color: 'white', value: `${type.valueAtTheBottomRightSideColumn2}%`, size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section3>
        <board-offsets :l="91" :t="96" :b="76" :r="105">
          <board-text-body
            sizeText="caption"
            offset="83px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn3"
            :text="type.topTextColumn3"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn3"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            :label="type.middleTextColumn3"
            iconChoice
            :period="type.selectIconInTheMiddleOfColumn3"
            :valueStg="{
              color: 'negative',
              value: type.valueInTheMiddleColumn3,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />
          <board-caption
            :text="type.textAtTheBottomColumn3"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.valueAtTheBottomLeftSideColumn3, size: 'xs' }"
            :right="{ color: 'white', value: `${type.valueAtTheBottomRightSideColumn3}%`, size: 'xs' }"
            :arrowSize="249"
          />
        </board-offsets>
      </template>
    </board-devider>
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
};
</script>

<style scoped>
</style>
