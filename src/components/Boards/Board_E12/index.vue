<template>
  <board-cover>
    <board-devider :cols="3">
      <template #section1>
        <board-offsets :l="86" :t="57" :b="56" :r="125">
          <board-text-body
            offset="84px"
            icon="fall"
            text="Количество происшествий"
            sizeText="caption"
            v-space-m:bottom="'56px'"
          />

          <board-numbers
            :value="type.numberOfIncidentsAtTheTop"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'48px'"
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
        <board-offsets :l="112" :t="57" :b="56" :r="96">
          <board-text-body
            offset="116px"
            icon="affected"
            text="Количество пострадавших"
            sizeText="caption"
            v-space-m:bottom="'56px'"
          />

          <board-numbers
            :value="type.numberOfVictimsTheTop"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'48px'"
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
        <board-offsets :l="87" :t="56" :b="56" :r="123">
          <board-text-body
            sizeText="caption"
            offset="70px"
            icon="died"
            text="Количество погибших"
            v-space-m:bottom="'56px'"
          />

          <board-numbers
            :value="type.deathTollAtTheTop"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'48px'"
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
