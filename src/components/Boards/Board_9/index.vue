<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="84"
      :t="109"
      :r="96"
      :b="54"
      :toPerc="['l']"
      v-space-m:left="'64px'"
    >
      <board-text-body
        offset="67px"
        icon="syringe"
        text="Количество поступившей вакцины «Гам-КОВИД-Вак» (Спутник-V)
              от новой коронавирусной инфекции"
        textWMax="2640px"
        v-space-m:bottom="'55px'"
      />

      <div
        class="tw-flex tw-flex-wrap tw-items-start"
        v-space-m:bottom="'29px'"
      >
        <board-numbers
          value="4 490"
          size="lg"
          color="positive"
          style="flex-basis: 1693px"
          class="tw-flex-grow tw-whitespace-nowrap"
          v-space-m:right="'200px'"
        />
        <div class="tw-flex-grow" v-space-m:bottom="'39px'">
          <board-caption text="Первое введение" />
          <board-mapping-numbers
            :arrowSize="208"
            :left="{ value: '463', size: 'sm', color: 'white' }"
            :right="{ value: '45,5%', size: 'xs', color: 'positive' }"
            align="end"
            bottomSpace="10px"
            v-space-m:bottom="'65px'"
          />

          <board-caption text="Второе введение" />
          <board-mapping-numbers
            :arrowSize="318"
            :left="{ value: '58', size: 'sm', color: 'white' }"
            :right="{ value: '18,3%', size: 'xs', color: 'positive' }"
          />
        </div>
        <!-- <board-mapping-numbers /> -->
      </div>

      <board-separator v-space-m:bottom="'50px'" />

      <div class="tw-flex tw-flex-wrap">
        <board-period-numbers
          period="day"
          label="за прошедшие сутки"
          :valueStg="{
            value: '6 789',
            color: 'negative',
            size: 'sm',
            showDynamic: true,
            dynamic: true,
          }"
          v-space-m:right="'259px'"
          v-space-m:bottom="'59px'"
        />

        <board-period-numbers
          period="month"
          label="поступило за месяц"
          :valueStg="{
            value: '6 789',
            color: 'negative',
            size: 'sm',
            showDynamic: true,
            dynamic: true,
          }"
          v-space-m:right="'259px'"
          v-space-m:bottom="'59px'"
        />
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
