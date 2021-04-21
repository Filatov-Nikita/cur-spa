<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="150" :t="169" :b="153" :toPerc="['l']">
          <board-text-body
            offset="106px"
            icon="bash-gerb"
            text="Обособленное
          подразделение (филиал) Клинико-диагностический инфекционный центр
          (Уфимский район, с. Зубово). На лечении находится, чел."
            textWMax="1425px"
            align="start"
            v-space-m:bottom="'66px'"
          />
          <board-numbers
            value="575"
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
            icon="bash-lebedi"
            text="Обособленное
          подразделение (филиал) Клинико-диагностический инфекционный центр
          (г. Стерлитамак). На лечении находится, чел. "
            textWMax="1391px"
            align="start"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            value="675"
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
};
</script>
