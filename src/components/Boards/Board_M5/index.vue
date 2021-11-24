<template>
  <board-cover >
    <board-offsets
      :width="3264"
      :l="124"
      :t="103"
      :r="150"
      :b="82"
      :toPerc="['l']"
    >
      <board-text-body
        icon="bed"
        textWMax="2239px"
        offset="73px"
        :text="type.name"
        v-space-m:bottom="'55px'"
      />
      <board-numbers
        :value="type.totalAvailableForPatientsWithNCI"
        color="negative"
        size="md"
        showDynamic
        :dynamic="true"
        v-space-m:bottom="'29px'"
      />
      <board-separator v-space-m:bottom="'38px'" />

      <div>
        <board-mapping-numbers
          label="Занято"
          :left="{
            value: type.busyOnTheLeft,
            color: 'positive',
            size: 'sm',
          }"
          :right="{
            value: `${type.busyOnTheRight}%`,
            color: 'white',
            size: 'xs',
            showDynamic: true,
            dynamic: true,
          }"
          :arrowSize="378"
          align="end"
          bottomSpace="20px"
        />
        <board-mapping-numbers
          label="Свободно"
          :left="{
            value: type.freeLeft,
            color: 'positive',
            size: 'sm',
          }"
          :right="{
            value: `${type.freeRight}%`,
            color: 'white',
            size: 'xs',
            showDynamic: true,
            dynamic: true,
          }"
          :arrowSize="536"
          align="end"
          bottomSpace="20px"
        />
      </div>
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
