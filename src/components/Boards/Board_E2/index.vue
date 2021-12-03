<template>
  <board-cover>

    <board-devider :cols="3">
      <template #section1>
        <board-offsets :l="119" :t="80" :b="56" :r="92">
          <board-text-body
            offset="71px"
            icon="died"
            text="Количество погибших в пожарах за неделю"
            sizeText="caption"
            v-space-m:bottom="'36px'"
          />

          <board-numbers
            :value="type.numberOfFatalitiesInFiresPerWeekAbove"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'18px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: type.numberOfFatalitiesInFiresPerWeekInTheMiddle,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.numberOfFatalitiesInFiresInAweekBottomLeftSide, size: 'xs' }"
            :right="{ color: 'white', value: `${type.numberOfFatalitiesInFiresInAweekBottomRightSide}%`, size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section2>
        <board-offsets :l="115" :t="87" :b="56" :r="98">
          <board-text-body
            offset="80px"
            icon="affected"
            text="Количество травмированных в пожарах за неделю"
            sizeText="caption"
            v-space-m:bottom="'36px'"
          />

          <board-numbers
            :value="type.numberOfPeopleIOInjuredInFiresPerWeekAbove"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'18px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: type.numberOfPeopleIOInjuredInFiresPerWeekInTheMiddle,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.numberOfPeopleIOInjuredInFiresInAweekAtTheBottomLeftSide, size: 'xs' }"
            :right="{ color: 'white', value: `${type.numberOfPeopleIOInjuredInFiresInAweekAtTheBottomRightSide}%`, size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section3>
        <board-offsets :l="91" :t="96" :b="56" :r="105">
          <board-text-body
            sizeText="caption"
            offset="83px"
            icon="saved"
            text="Количество спасенных в пожарах за неделю"
            v-space-m:bottom="'36px'"
          />

          <board-numbers
            :value="type.numberOfPeopleRescuedInFiresPerWeekAbove"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'18px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: type.numberOfPeopleRescuedByFiresInTheMiddleOfTheWeek,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />
          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.numberOfPeopleRescuedInFiresInAweekBottomLeftSide, size: 'xs' }"
            :right="{ color: 'white', value: `${type.numberOfPeopleRescuedInFiresInAweekBottomRightSide}%`, size: 'xs' }"
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
