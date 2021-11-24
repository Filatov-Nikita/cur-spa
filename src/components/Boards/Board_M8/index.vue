<template>
  <board-cover >
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="124" :t="149" :b="350" :toPerc="['l']">
          <board-text-body
            icon="helicopter"
            textWMax="1040px"
            offset="70px"
            text="По скорой медицинской помощи (20 мин. интервал)"
            v-space-m:bottom="'120px'"
          />

          <board-numbers
            :value="`${type.ambulance20minInterval}%`"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="true"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :width="1633" :l="100" :t="149" :b="350" :toPerc="['l']">
          <board-text-body
            icon="ambulance"
            textWMax="906px"
            offset="65px"
            text="По неотложным показаниям (в течение 2 часов)"
            v-space-m:bottom="'120px'"
          />

          <board-numbers
            :value="`${type.forUrgentIndicationsWithin2Hours}%`"
            color="negative"
            size="lg"
            showDynamic
            :dynamic="true"
          />
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
