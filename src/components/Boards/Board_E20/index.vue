<template>
  <board-cover>
    <board-devider :cols="4">
      <template #section1>
        <board-offsets :l="117" :t="144" :b="134" :r="57">
          <board-text-body
            offset="53px"
            icon="door"
            text="Эвакуировано в ходе реагирования"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.evacuatedDuringResponse"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="70px"
            icon="kids"
            sizeText="caption"
            text="В том числе"
            v-space-m:bottom="'82px'"
          />

          <board-numbers :value="type.childrenEvacuated" color="negative" size="sm" />
        </board-offsets>
      </template>
      <template #section2>
        <board-offsets :l="121" :t="135" :b="134" :r="119">
          <board-text-body
            offset="68px"
            icon="affected"
            text="Пострадало человек"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.injuredPerson"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="50px"
            icon="kids"
            sizeText="caption"
            text="В том числе"
            v-space-m:bottom="'82px'"
          />

          <board-numbers :value="type.hurtChildren" color="positive" size="sm" />
        </board-offsets>
      </template>
      <template #section3>
        <board-offsets :l="124" :t="138" :b="134" :r="124">
          <board-text-body
            offset="68px"
            icon="died"
            text="Погибло человек"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.numberOfEvacuees"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="50px"
            icon="kids"
            sizeText="caption"
            text="В том числе"
            v-space-m:bottom="'82px'"
          />

          <board-numbers :value="type.childrenDied" color="positive" size="sm" />
        </board-offsets>
      </template>
      <template #section4>
        <board-offsets :l="133" :t="142" :b="134" :r="82">
          <board-text-body
            offset="68px"
            icon="umbrella"
            text="Спасено человек"
            sizeText="caption"
            v-space-m:bottom="'160px'"
          />

          <board-numbers
            :value="type.numberOfVictims"
            color="negative"
            size="md"
            v-space-m:bottom="'50px'"
          />

          <board-separator v-space-m:bottom="'58px'" />

          <board-text-body
            offset="50px"
            icon="kids"
            sizeText="caption"
            text="В том числе"
            v-space-m:bottom="'82px'"
          />

          <board-numbers :value="type.childrenSaved" color="positive" size="sm" />
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
