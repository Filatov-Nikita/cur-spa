<template>
  <board-cover>
    <board-devider leftWidth="60%" rightWidth="40%">
      <template #left>
        <board-offsets
          :width="1968"
          :l="124"
          :t="146"
          :b="106"
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
            value="24 449"
            color="positive"
            size="lg"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'82px'" />

          <board-mapping-numbers
            :left="{ color: 'negative', value: '+155', size: 'sm' }"
            :right="{ color: 'white', value: '+15%', size: 'xs' }"
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
          :t="134"
          :b="73"
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
            value="877"
            color="white"
            size="sm"
            v-space-m:bottom="'55px'"
          />

          <board-mapping-numbers
            :left="{ color: 'positive', value: '-15', size: 'xs' }"
            :right="{ color: 'white', value: '-1,5%', size: 'xs' }"
            :arrowSize="330"
            align="end"
            bottomSpace="10px"
            offset="40px"
            v-space-m:bottom="'124px'"
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
            value="45"
            color="white"
            size="sm"
            v-space-m:bottom="'41px'"
          />

          <board-mapping-numbers
            :left="{ color: 'negative', value: '+1', size: 'xs' }"
            :right="{ color: 'white', value: '-1', size: 'xs' }"
            :arrowSize="464"
          />
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
