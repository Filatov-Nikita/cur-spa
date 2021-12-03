<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="124"
      :t="103"
      :r="150"
      :b="82"
      :toPerc="['l']"
    >
      <board-text-body
        iconChoice
        :icon="type.selectIconAtTheTop"
        textWMax="2239px"
        offset="73px"
        :text="type.date"
        v-space-m:bottom="'55px'"
      />
      <board-numbers
        :value="type.value"
        color="negative"
        size="md"
        showDynamic
        :dynamic="true"
        v-space-m:bottom="'29px'"
      />
    </board-offsets>
  </board-cover>
</template>

<script>

export default {
    props: {
    type: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style>
</style>
