<template>
  <board-cover v-if="type" >
    <board-devider leftWidth="60%" rightWidth="40%">
      <template #left>
        <board-offsets
          :width="1968"
          :l="124"
          :t="90"
          :b="58"
          :r="70"
          :toPerc="['l']"
        >
          <board-text-body
            icon="dtp"
            offset="73px"
            text="Количество ДТП с начала года"
            v-space-m:bottom="'126px'"
          />

          <board-numbers
            :value="type.numberOfAccidentsSinceTheBeginningOfTheYear"
            color="positive"
            size="lg"
            v-space-m:bottom="'38px'"
          />

          <board-separator v-space-m:bottom="'62px'" />

          <board-mapping-numbers
            :left="{ color: 'negative', value: type.comparedToDataForTheSamePeriodLastYearOnTheLeft, size: 'sm' }"
            :right="{ color: 'white', value: `${type.comparedToDataForTheSamePeriodLastYearOnTheRight}%`, size: 'xs' }"
            :arrowSize="606"
            align="end"
            bottomSpace="10px"
            offset="85px"
            label="по сравнению с данными на аналогичный период прошлого года"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1312"
          :l="174"
          :t="84"
          :b="50"
          :r="50"
          :toPerc="['l']"
        >
          <board-text-body
            icon="affected"
            textWMax="610px"
            offset="91px"
            sizeText="caption"
            text="Количество пострадавших с начала года"
            v-space-m:bottom="'58px'"
          />

          <board-numbers
            :value="type.theNumberOfVictimsSinceTheBeginningOfTheYearFromAbove"
            color="white"
            size="sm"
            v-space-m:bottom="'55px'"
          />

          <board-mapping-numbers
            :left="{ color: 'positive', value: type.theNumberOfVictimsSinceTheBeginningOfTheYearOnTheLeft, size: 'xs' }"
            :right="{ color: 'white', value: `${type.theNumberOfVictimsSinceTheBeginningOfTheYearOnTheRight}%`, size: 'xs' }"
            :arrowSize="330"
            align="end"
            bottomSpace="10px"
            offset="40px"
            v-space-m:bottom="'104px'"
          />

          <board-text-body
            icon="died"
            textWMax="500px"
            offset="81px"
            sizeText="caption"
            text="Количество погибших с начала года"
            v-space-m:bottom="'58px'"
          />

          <board-numbers
            :value="type.theNumberOfDeathsSinceTheBeginningOfTheYearFromAbove"
            color="white"
            size="sm"
            v-space-m:bottom="'41px'"
          />

          <board-mapping-numbers
            :left="{ color: 'negative', value: type.deathTollSinceTheBeginningOfTheYearLeft, size: 'xs' }"
            :right="{ color: 'white', value: type.deathTollSinceTheBeginningOfTheYearRight, size: 'xs' }"
            :arrowSize="464"
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

<style>
</style>
