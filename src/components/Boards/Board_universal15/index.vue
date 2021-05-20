<template>
  <board-cover>
    <board-devider leftWidth="59.5%" rightWidth="40.5%">
      <template #left>
        <board-offsets
          :width="1944"
          :l="114"
          :t="162"
          :b="73"
          :r="40"
          :toPerc="['l']"
        >
          <board-text-body
            icon="emergency"
            textWMax="1370px"
            offset="73px"
            text="Количество обращений с 16 ноября 2020 г."
            v-space-m:bottom="'88px'"
            v-space-m:left="'20px'"
          />

          <board-numbers value="45 316" color="positive" size="lg" />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1896"
          :l="106"
          :t="303"
          :b="93"
          :r="44"
          :toPerc="['l']"
        >
          <board-period-numbers
            period="week"
            label="за неделю"
            :valueStg="{
              value: '1893',
              showDynamic: true,
              dynamic: true,
              size: 'md',
              color: 'negative',
            }"
            v-space-m:bottom="'149px'"
          />

          <board-text-body
            icon="syringe-small"
            textWMax="880px"
            offset="51px"
            sizeText="caption"
            text="Количество обращений по вопросу вакцинации от НКИ за неделю"
            align="start"
            v-space-m:bottom="'26px'"
          />

          <board-mapping-numbers
            :left="{
              value: '515',
              color: 'positive',
              size: 'sm',
              showDynamic: true,
              dynamic: true,
            }"
            :right="{
              value: '27,2%',
              color: 'white',
              size: 'xs',
            }"
            :arrowSize="250"
            align="end"
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
