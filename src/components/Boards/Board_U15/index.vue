<template>
  <board-cover>
    <board-devider leftWidth="60%" rightWidth="40%">
      <template #left>
        <board-offsets
          :width="1968"
          :l="115"
          :t="126"
          :b="73"
          :r="70"
          :toPerc="['l']"
        >
          <board-text-body
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            offset="73px"
            v-space-m:bottom="'126px'"
          />

          <board-numbers
            :value="type.valueColumn1"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1312"
          :l="174"
          :t="134"
          :b="73"
          :r="50"
          :toPerc="['l']"
        >
          <board-text-body
            iconChoice
            :icon="type.selectIconAtTheTopColumn2"
            :text="type.topTextColumn2"
            textWMax="900px"
            offset="91px"
            sizeText="caption"
            v-space-m:bottom="'54px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn2"
            color="negative"
            size="md2"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'103px'"
          />

          <board-text-body
            iconChoice
            :icon="type.selectIconInTheBottomColumn2"
            :text="type.textAtTheBottomColumn2"
            textWMax="900px"
            offset="81px"
            sizeText="caption"
            v-space-m:bottom="'55px'"
          />

          <board-numbers
            :value="type.valueIAtTheBottomColumn2"
            color="positive"
            size="md2"
            showDynamic
            :dynamic="false"
          />
        </board-offsets>
      </template>
    </board-devider>
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
