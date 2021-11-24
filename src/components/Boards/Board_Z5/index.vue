<template>
  <board-cover v-if="type" >
    <board-devider leftWidth="69%" rightWidth="31%">
      <template #left>
        <board-offsets :b="390" :l="156" :r="184" :t="139">
          <board-text-body
            offset="88px"
            icon="trassa"
            text="Убрано улиц по РБ, км"
            v-space-m:bottom="'35px'"
          />
          <board-numbers
            :value="type.removedStreetsAcrossTheRB_km"
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
              icon="dvor"
              offset="89px"
              text="Убрано дворов по РБ"
              sizeText="caption"
              v-space-m:bottom="'39px'"
            />
            <board-numbers
              :value="type.removedYardsInRB"
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
