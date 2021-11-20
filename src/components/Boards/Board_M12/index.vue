<template>
  <board-cover v-if="type">
    <board-devider leftWidth="59.5%" rightWidth="40.5%">
      <template #left>
        <board-offsets
          :width="1944"
          :l="114"
          :t="142"
          :b="100"
          :r="40"
          :toPerc="['l']"
        >
          <board-text-body
            icon="emergency"
            textWMax="1370px"
            offset="73px"
            text="Количество обращений с 16 ноября 2020 г."
            v-space-m:bottom="'88px'"
            v-space-m:left="'20px'"
          />

          <board-numbers :value="type.numberOfRequestsSinceNovember_16_2020" color="positive" size="lg" />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1896"
          :l="106"
          :t="280"
          :b="100"
          :r="44"
          :toPerc="['l']"
        >
          <board-period-numbers
            period="week"
            label="за неделю"
            :valueStg="{
              value: type.duringTheWeek,
              showDynamic: true,
              dynamic: true,
              size: 'md',
              color: 'negative',
            }"
            v-space-m:bottom="'149px'"
          />

          <board-text-body
            icon="syringe-small"
            textWMax="880px"
            offset="51px"
            sizeText="caption"
            text="Количество обращений по вопросу вакцинации от НКИ за неделю"
            align="start"
            v-space-m:bottom="'26px'"
          />

          <board-mapping-numbers
            :left="{
              value: type.numberOfRequestsForVaccinationFromNKIPerWeekOnTheLeft,
              color: 'positive',
              size: 'sm',
              showDynamic: true,
              dynamic: true,
            }"
            :right="{
              value: `${type.numberOfRequestsForVaccinationFromNKIPerWeekOnTheRight}%`,
              color: 'white',
              size: 'xs',
            }"
            :arrowSize="250"
            align="end"
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
