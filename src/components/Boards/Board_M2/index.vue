<template>
  <board-cover  v-if="type">
    <board-offsets :width="3264" :l="124" :t="119" :b="62" :toPerc="['l']">
      <board-text-body
        icon="heart-rate"
        textWMax="1901px"
        offset="81px"
        :text="type.name"
        v-space-m:bottom="'53px'"
        v-space-m:left="'34px'"
      />
      <div v-space-m:bottom="'53px'" class="tw-inline-block">
        <board-mapping-numbers
          :left="{
            value: type.dischargedWithRecoveryForTheEntireTimeOfObservationOnTheLeft,
            color: 'positive',
            size: 'lg',
          }"
          :right="{
            value: `${type.dischargedWithRecoveryForTheEntireTimeOfObservationOnTheRight}%`,
            color: 'white',
            size: 'sm',
          }"
          :arrowSize="636"
          v-space-m:bottom="'141px'"
          align="end"
          bottomSpace="100px"
        />

        <board-separator />
      </div>

      <board-period-numbers
        period="day"
        label="за прошедшие сутки"
        :valueStg="{
          value: type.overThePastDay,
          color: 'negative',
          size: 'sm',
          showDynamic: true,
          dynamic: true,
        }"
      />
    </board-offsets>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  mixins: [currentSlideData],
};
</script>

<style>
</style>
