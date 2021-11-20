<template>
  <board-cover v-if="type">
    <board-offsets
      :width="3264"
      :l="146"
      :t="86"
      :b="56"
      :r="116"
      :toPerc="['l']"
    >
      <board-text-body
        icon="wine"
        offset="71px"
        textWMax="1433px"
        text="Количество зафиксированных случаев с водителями, находящимися в состоянии алкогольного опьянения"
        v-space-m:bottom="'56px'"
      />

      <div class="tw-flex tw-flex-wrap container tw-items-center">
        <board-numbers
          :value="type.theNumberOfRecordedCasesWithDrunkDrivers"
          color="negative"
          size="lg"
          showDynamic
          dynamic
          v-space-m:bottom="'38px'"
          class="numbers"
        />

        <div class="accident">
          <board-text-body
            icon="accident"
            offset="54px"
            text="Из них количество ДТП"
            v-space-m:bottom="'60px'"
          />

          <board-mapping-numbers
            align="bottom"
            bottomSpace="55px"
            :arrowSize="220"
            offset="60px"
            :left="{
              color: 'positive',
              size: 'md2',
              value: type.ofWhichTheNumberOfAccidentsOnTheLeft,
            }"
            :right="{
              color: 'white',
              size: 'xs',
              value: `${type.ofWhichTheNumberOfAccidentsOnTheRight}%`,
            }"
          />
        </div>
      </div>

      <board-separator v-space-m:bottom="'52px'" />

      <board-period-numbers
        period="year"
        label="с начала года"
        :valueStg="{
          color: 'negative',
          size: 'sm',
          value: type.sinceTheBeginningOfTheYear,
        }"
      />
    </board-offsets>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  mixins: [currentSlideData],
};
</script>

<style lang="scss" scoped>
//$
.container {
  margin-left: convertValues(-79.5px);
  margin-right: convertValues(-79.5px);
  margin-top: convertValues(-30px);
}
.numbers,
.accident {
  margin-left: convertValues(79.5px);
  margin-right: convertValues(79.5px);
  margin-top: convertValues(30px);
  margin-bottom: convertValues(30px);
}

.numbers {
  flex-basis: convertValues(1661px);
}

// .accident {
//   flex-basis: convertValues(1172px);
// }
</style>
