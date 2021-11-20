<template>
  <board-cover >
    <board-devider leftWidth="69%" rightWidth="31%">
      <template #left>
        <board-offsets :b="390" :l="156" :r="184" :t="139">
          <board-text-body
            offset="88px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            v-space-m:bottom="'35px'"
          />
          <board-numbers
            :value="type.valueColumn1"
            color="negative"
            size="lg"
            showDynamic
            dynamic
            v-space-m:bottom="'143px'"
          />
          <board-separator />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :b="154" :l="136" :r="220" :t="209">
          <board-offsets>
            <board-text-body
              textWMax="349px"
              iconChoice
              :icon="type.selectIconAtTheTopColumn2"
              :text="type.topTextColumn2"
              offset="89px"
              sizeText="caption"
              v-space-m:bottom="'39px'"
            />
            <board-numbers
              :value="type.valueAtTheTopColumn2"
              color="positive"
              size="sm"
              showDynamic
              dynamic
              v-space-m:bottom="'333px'"
            />

            <board-text-body
              textWMax="409px"
              iconChoice
              :icon="type.selectIconInTheBottomColumn2"
              offset="89px"
              :text="type.textAtTheBottomColumn2"
              sizeText="caption"
              v-space-m:bottom="'39px'"
            />
            <board-numbers
              :value="type.valueIAtTheBottomColumn2"
              color="positive"
              size="sm"
              showDynamic
              dynamic
            />
          </board-offsets>
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  mixins: [currentSlideData],
};
</script>

<style>
</style>
