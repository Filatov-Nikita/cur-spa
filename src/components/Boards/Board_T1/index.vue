<template>
  <board-cover>
    <board-devider leftWidth="60%" rightWidth="40%">
      <template #left>
        <board-offsets
          :width="1968"
          :l="115"
          :t="126"
          :b="73"
          :r="70"
          :toPerc="['l']"
        >
          <board-text-body
            icon="dtp"
            offset="73px"
            text="Количество ДТП за неделю"
            v-space-m:bottom="'126px'"
          />

          <board-numbers
            :value="type.numberOfIncidentsPerWeek"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1312"
          :l="174"
          :t="134"
          :b="73"
          :r="50"
          :toPerc="['l']"
        >
          <board-text-body
            icon="affected"
            textWMax="900px"
            offset="91px"
            sizeText="caption"
            text="Количество пострадавших"
            v-space-m:bottom="'54px'"
          />

          <board-numbers
            :value="type.numberOfVictims"
            color="negative"
            size="md2"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'103px'"
          />

          <board-text-body
            icon="died"
            textWMax="900px"
            offset="81px"
            sizeText="caption"
            text="Количество погибших"
            v-space-m:bottom="'55px'"
          />

          <board-numbers
            :value="type.theDeathToll"
            color="positive"
            size="md2"
            showDynamic
            :dynamic="false"
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
