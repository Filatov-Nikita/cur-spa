<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="147" :t="149" :b="78" :toPerc="['l']">
          <board-text-body
            icon="sputnik"
            textWMax="1040px"
            offset="90px"
            text="«Гам-КОВИД-Вак» (Спутник-V)"
            v-space-m:bottom="'122px'"
          />

          <board-caption
            text="Всего поступило в Республику Башкортостан"
            wMax="1070px"
          />

          <board-numbers
            value="44 545"
            color="negative"
            size="md"
            v-space-m:bottom="'149px'"
          />

          <board-caption
            text="Привито 1 и 2 компонентами "
            wMax="1070px"
            v-space-m:bottom="'42px'"
          />

          <board-mapping-numbers
            :left="{ value: '12 545', color: 'positive', size: 'sm' }"
            :right="{ value: '18,3%', color: 'white', size: 'xs' }"
            :arrowSize="243"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :width="1633" :l="114" :t="149" :b="78" :toPerc="['l']">
          <board-text-body
            icon="corona"
            textWMax="906px"
            offset="62px"
            text="«ЭпиВакКорона»"
            v-space-m:bottom="'132px'"
          />
          <board-caption
            text=" Всего поступило в Республику Башкортостан"
            wMax="1016px"
          />

          <board-numbers
            value="45 545"
            color="positive"
            size="md"
            v-space-m:bottom="'190px'"
          />

          <board-caption
            text="Привито 1 и 2 компонентами "
            wMax="1016px"
            v-space-m:bottom="'42px'"
          />

          <board-mapping-numbers
            :left="{ value: '1 585', color: 'negative', size: 'sm' }"
            :right="{ value: '7,6%', color: 'white', size: 'xs' }"
            :arrowSize="379"
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
