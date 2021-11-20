м\<template>
  <board-cover v-if="type">
    <board-devider leftWidth="67%" rightWidth="33%">
      <template #left>
        <board-offsets :width="2189" :l="134" :t="109" :b="73" :toPerc="['l']">
          <board-text-body
            icon="corona-virus"
            textWMax="1111px"
            offset="91px"
            :text="type.name"
            v-space-m:bottom="'40px'"
          />
          
          <board-numbers
            :value="type.coronavirusInfectionCasesRegistered"
            color="negative"
            size="lg"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'53px'" wmax="1538px" />

          <div class="tw-flex tw-flex-wrap" style="max-width: 80%">
            <board-period-numbers
              period="day"
              label="за прошедшие сутки"
              :valueStg="{
                value: type.overThePastDay,
                color: 'negative',
                size: 'sm',
                showDynamic: true,
                dynamic: true,
              }"
              v-space-m:right="'230px'"
            />

            <board-period-numbers
              period="week"
              label="за неделю"
              :valueStg="{
                value: type.duringTheWeek,
                color: 'positive',
                size: 'sm',
                showDynamic: true,
                dynamic: false,
              }"
            />
          </div>
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :width="1075" :l="236" :t="109" :b="73" :toPerc="['l']">
          <board-text-body
            icon="up-index"
            textWMax="531px"
            offset="88px"
            text="Темп прироста (Индекс)"
            v-space-m:bottom="'50px'"
          />

          <board-numbers
            :value="type.growthRate"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'20px'"
          />

          <board-caption
            text="Уровень заболеваемости на 100 тыс. населения"
            wMax="581px"
            v-space-m:bottom="'30px'"
          />
          <board-numbers
            :value="type.morbidityRatePer100ThousandPopulation"
            color="white"
            size="sm"
            showDynamic
            :dynamic="false"
          />
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  name: 'BoardM1',
  mixins: [currentSlideData],
};
</script>
<style lang="scss" scoped>
//$
.bottom-numbers {
  max-width: convertValues(1484px);
  border-top: 1px solid theme('colors.white');
  @apply tw-flex tw-justify-between;
}
</style>
