<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="109"
          :t="97"
          :b="94"
          :r="188"
          :toPerc="['l']"
        >
          <board-text-body
            offset="67px"
            icon="affected"
            text="Количество пострадавших"
            v-space-m:bottom="'60px'"
          />

          <board-numbers value="8" size="lg" color="positive" />

          <board-separator v-space-m:bottom="'60px'" />

          <board-period-numbers
            period="year"
            label="с начала года"
            :valueStg="{ value: '49', size: 'sm', color: 'negative' }"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1632"
          :l="86"
          :t="97"
          :b="94"
          :r="188"
          :toPerc="['l']"
        >
          <board-text-body
            offset="67px"
            icon="died"
            text="Количество погибших"
            v-space-m:bottom="'60px'"
          />

          <board-numbers value="1" size="lg" color="negative" />

          <board-separator v-space-m:bottom="'60px'" />

          <board-period-numbers
            period="year"
            label="с начала года"
            :valueStg="{ value: '4', size: 'sm', color: 'negative' }"
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
