<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="150" :t="169" :b="153" :toPerc="['l']">
          <board-text-body
            offset="106px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            textWMax="1425px"
            align="start"
            v-space-m:bottom="'66px'"
          />
          <board-numbers
            :value="type.valueColumn1"
            size="lg"
            color="positive"
            showDynamic
            dynamic
            v-space-m:bottom="'135px'"
          />
        </board-offsets>
      </template>

      <template #right>
        <board-offsets :width="1633" :l="100" :t="169" :b="153" :toPerc="['l']">
          <board-text-body
            offset="115px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn2"
            :text="type.topTextColumn2"
            textWMax="1391px"
            align="start"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            :value="type.valueColumn2"
            size="lg"
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
  name: 'Board4',
    props: {
    type: {
      required: true,
      type: Object,
    },
  },
};
</script>
