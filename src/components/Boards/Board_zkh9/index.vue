<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="177"
          :t="161"
          :b="531"
          :r="107"
          :toPerc="['l']"
        >
          <board-text-body
            offset="75px"
            icon="lupa"
            text="Выявлено нарушений в МКД"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            value="17"
            size="md"
            color="negative"
            showDynamic
            dynamic
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1632"
          :l="135"
          :t="156"
          :b="551"
          :r="27"
          :toPerc="['l']"
        >
          <board-text-body
            offset="111px"
            icon="notebook"
            text="Составлено протоколов"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            value="16"
            size="md"
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
export default {};
</script>

<style>
</style>
