<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="159"
          :t="150"
          :b="412"
          :r="110"
          :toPerc="['l']"
        >
          <board-text-body
            offset="89px"
            icon="tractor"
            text="Задействовано единиц техники"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            :value="type.equipmentUnitsInvolved"
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
          :l="120"
          :t="143"
          :b="118"
          :r="27"
          :toPerc="['l']"
        >
          <board-text-body
            offset="57px"
            icon="dor-rab"
            text="Задействовано человек"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            :value="type.involvedMan"
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
