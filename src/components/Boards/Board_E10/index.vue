<template>
  <board-cover>
    <board-devider :cols="3">
      <template #section1>
        <board-offsets :l="119" :t="60" :b="66" :r="92">
          <board-text-body
            offset="91px"
            icon="road-way"
            text="Количество происшествий"
            sizeText="caption"
            v-space-m:bottom="'46px'"
          />

          <board-numbers
            :value="type.numberOfIncidentsAtTheTop"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'40px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: type.numberOfIncidentsInTheMiddle,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.numberOfIncidentsBottomLeftSide, size: 'xs' }"
            :right="{ color: 'white', value: `${type.numberOfIncidentsBottomRightSide}%`, size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section2>
        <board-offsets :l="115" :t="67" :b="66" :r="98">
          <board-text-body
            offset="116px"
            icon="affected"
            text="Количество пострадавших"
            sizeText="caption"
            v-space-m:bottom="'46px'"
          />

          <board-numbers
            :value="type.numberOfVictimsTheTop"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'40px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: type.numberOfVictimsTheMiddle,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.numberOfVictimsAtTheBottomTheLeftSide, size: 'xs' }"
            :right="{ color: 'white', value: `${type.numberOfVictimsAtTheBottomTheRightSide}%`, size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section3>
        <board-offsets :l="91" :t="66" :b="66" :r="105">
          <board-text-body
            sizeText="caption"
            offset="70px"
            icon="died"
            text="Количество погибших"
            v-space-m:bottom="'46px'"
          />

          <board-numbers
            :value="type.deathTollAtTheTop"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'40px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: type.theDeathTollInTheMiddle,
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />
          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: type.theDeathTollBottomLeftSide, size: 'xs' }"
            :right="{ color: 'white', value: `${type.theDeathTollBottomRightSide}%`, size: 'xs' }"
            :arrowSize="249"
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

<style scoped>
</style>
