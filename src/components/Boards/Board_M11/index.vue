<template>
  <board-cover >
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="147" :t="109" :b="38" :toPerc="['l']">
          <board-text-body
            icon="sputnik"
            textWMax="1040px"
            offset="90px"
            text="«Гам-КОВИД-Вак» (Спутник-V)"
            v-space-m:bottom="'122px'"
          />

          <board-caption
            text="Всего поступило в Республику Башкортостан"
            wMax="1070px"
          />

          <board-numbers 
            :value="type.gamCOVIDVakSputnikVReceivedPInTotalInTheRepublicOfBashkortostan"
            color="negative"
            size="md"
            v-space-m:bottom="'149px'"
          />

          <board-caption
            text="Привито 1 и 2 компонентами "
            wMax="1070px"
            v-space-m:bottom="'42px'"
          />

          <board-mapping-numbers
            :left="{ value: type.inoculatedWith1and2ComponentsOnTheLeft, color: 'positive', size: 'sm' }"
            :right="{ value: `${type.inoculatedWith2ComponentsOnTheLeftInPercents}%`, color: 'white', size: 'xs' }"
            :arrowSize="243"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :width="1633" :l="114" :t="119" :b="78" :toPerc="['l']">
          <board-text-body
            icon="corona"
            textWMax="906px"
            offset="62px"
            text="«ЭпиВакКорона»"
            v-space-m:bottom="'132px'"
          />
          <board-caption
            text=" Всего поступило в Республику Башкортостан"
            wMax="1016px"
          />

          <board-numbers
            :value="type.epiVacCoronaReceivedInTotalInTheRepublicOfBashkortostan"
            color="positive"
            size="md"
            v-space-m:bottom="'190px'"
          />

          <board-caption
            text="Привито 1 и 2 компонентами "
            wMax="1016px"
            v-space-m:bottom="'42px'"
          />

          <board-mapping-numbers
            :left="{ value: type.inoculatedWith1and2ComponentsOnTheRight, color: 'negative', size: 'sm' }"
            :right="{ value: `${type.inoculatedWith2ComponentsOnTheRightInPercents}%`, color: 'white', size: 'xs' }"
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
  mixins: [currentSlideData],
};
</script>

<style>
</style>
