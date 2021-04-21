<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="160"
          :t="150"
          :b="118"
          :r="87"
          :toPerc="['l']"
        >
          <board-text-body
            offset="67px"
            icon="learning"
            text="Количество профилактических рейдов за неделю"
            textWMax="1139px"
            v-space-m:bottom="'27px'"
          />

          <board-numbers
            value="111"
            size="md"
            color="negative"
            showDynamic
            dynamic
          />

          <board-separator v-space-m:bottom="'73px'" />

          <board-caption
            text="Количество граждан из групп риска, взятые под кураторство"
            wMax="903px"
            v-space-m:bottom="'23px'"
          />
          <board-numbers value="4 111" size="sm" color="positive" />
        </board-offsets>
      </template>
      <template #right>
        <q-img src="bus.jpg" width="100%" height="100%" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
