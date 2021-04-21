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
            value="20"
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

          <board-numbers value="2" color="negative" size="sm" />
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
            value="8"
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

          <board-numbers value="0" color="positive" size="sm" />
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
            value="1"
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

          <board-numbers value="0" color="positive" size="sm" />
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
            value="1"
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

          <board-numbers value="0" color="positive" size="sm" />
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
