<template>
  <board-cover v-if="type">
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="177"
          :t="131"
          :b="73"
          :r="107"
          :toPerc="['l']"
        >
          <board-text-body
            offset="75px"
            icon="lupa"
            text="Выявлено нарушений в МКД"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            :value="type.revealedViolationsInMKD"
            size="md"
            color="negative"
            showDynamic
            dynamic
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1632"
          :l="135"
          :t="131"
          :b="73"
          :r="27"
          :toPerc="['l']"
        >
          <board-text-body
            offset="111px"
            icon="notebook"
            text="Составлено протоколов"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            :value="type.drawnUpProtocols"
            size="md"
            color="positive"
            showDynamic
            dynamic
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
