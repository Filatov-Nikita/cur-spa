<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="160"
          :t="133"
          :b="118"
          :r="87"
          :toPerc="['l']"
        >
          <board-text-body
            offset="67px"
            icon="learning"
            text="Подкормка озимых, тыс ГА"
            textWMax="1139px"
            v-space-m:bottom="'179px'"
          />

          <board-numbers value="418" size="lg" color="positive" />

          <board-separator />
        </board-offsets>
      </template>
      <template #right>
        <q-img src="sel/sel1.jpg" width="100%" height="100%" :style="{'min-height': $toRem('1450px')}" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
