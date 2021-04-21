<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="131" :t="149" :b="78" :toPerc="['l']">
          <board-text-body
            icon="ambulance"
            textWMax="922px"
            offset="81px"
            text="Общее количество вызовов за сутки"
            v-space-m:bottom="'33px'"
          />

          <board-numbers
            value="3 711"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'151px'"
          />
          <board-separator wmax="1293px" v-space-m:bottom="'31px'" />

          <board-caption
            text="Количество вызовов по эпидемиологическим показаниям"
            wMax="1329px"
            v-space-m:bottom="'39px'"
          />

          <board-numbers
            value="3 711"
            color="negative"
            size="sm"
            showDynamic
            :dynamic="false"
          />
        </board-offsets>
      </template>

      <template #right>
        <board-offsets :width="1633" :l="172" :t="149" :b="78" :toPerc="['l']">
          <board-text-body
            icon="doctor"
            textWMax="1004px"
            offset="92px"
            text="Общее количество работающих врачебных бригад"
            v-space-m:bottom="'33px'"
          />

          <board-numbers
            value="325"
            color="positive"
            size="md"
            showDynamic
            :dynamic="true"
            v-space-m:bottom="'151px'"
          />

          <board-separator wmax="1293px" v-space-m:bottom="'31px'" />
          <board-caption
            text="Количество вызовов по эпидемиологическим показаниям"
            wMax="1283px"
            v-space-m:bottom="'39px'"
          />

          <board-numbers
            value="125 "
            color="negative"
            size="sm"
            showDynamic
            :dynamic="false"
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
