<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="160"
          :t="109"
          :b="87"
          :r="107"
          :toPerc="['l']"
        >
          <board-text-body
            offset="62px"
            icon="fire-ext"
            text="Количество пожаров за неделю"
          />

          <board-numbers
            value="163"
            size="lg"
            color="negative"
            showDynamic
            dynamic
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1632"
          :l="150"
          :t="107"
          :b="87"
          :r="128"
          :toPerc="['l']"
        >
          <board-text-body
            offset="62px"
            icon="fire-at-home"
            text="Количество пожаров с начала года"
          />

          <board-numbers value="4669" size="lg" color="positive" />

          <board-separator v-space-m:bottom="'82px'" />

          <board-caption
            text="по сравнению с данными на аналогичный период прошлого года"
          />
          <board-mapping-numbers
            :arrowSize="549"
            :left="{ value: '-29', size: 'sm', color: 'negative' }"
            :right="{ value: '15%', size: 'xs', color: 'white' }"
            align="end"
            offset="95px"
            bottomSpace="10px"
            v-space-m:bottom="'65px'"
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
