<template>
  <board-cover v-if="type" >
    <board-devider :cols="4">
      <template #section1>
        <board-offsets :l="117" :t="144" :b="134" :r="57">
          <board-text-body
            offset="53px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn1"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="70px"
            iconChoice
            :icon="type.selectIconInTheBottomColumn1"
            :text="type.textAtTheBottomColumn1"
            sizeText="caption"
            v-space-m:bottom="'82px'"
          />

          <board-numbers value="2" color="negative" size="sm" />
        </board-offsets>
      </template>
      <template #section2>
        <board-offsets :l="121" :t="135" :b="134" :r="119">
          <board-text-body
            offset="68px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn2"
            :text="type.topTextColumn2"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn2"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="50px"
            iconChoice
            :icon="type.selectIconInTheBottomColumn2"
            :text="type.textAtTheBottomColumn2"
            sizeText="caption"
            v-space-m:bottom="'82px'"
          />

          <board-numbers value="0" color="positive" size="sm" />
        </board-offsets>
      </template>
      <template #section3>
        <board-offsets :l="124" :t="138" :b="134" :r="124">
          <board-text-body
            offset="68px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn3"
            :text="type.topTextColumn3"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn3"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="50px"
            iconChoice
            :icon="type.selectIconInTheBottomColumn3"
            :text="type.textAtTheBottomColumn3"
            sizeText="caption"
            v-space-m:bottom="'82px'"
          />

          <board-numbers value="0" color="positive" size="sm" />
        </board-offsets>
      </template>
      <template #section4>
        <board-offsets :l="133" :t="142" :b="134" :r="82">
          <board-text-body
            offset="68px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn4"
            :text="type.topTextColumn4"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.valueAtTheTopColumn4"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="50px"
            iconChoice
            :icon="type.selectIconInTheBottomColumn4"
            :text="type.textAtTheBottomColumn4"
            sizeText="caption"
            v-space-m:bottom="'82px'"
          />

          <board-numbers value="0" color="positive" size="sm" />
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
