<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="156"
      :t="85"
      :b="69"
      :r="276"
      :toPerc="['l']"
    >
      <div class="tw-flex" v-space-m:bottom="'53px'">
        <div :style="{ 'flex-basis': $toRem(' 1661px') }" class="tw-flex-grow">
          <board-text-body
            offset="76px"
            icon="building"
            text="Осмотрено МКД"
            v-space-m:bottom="'116px'"
          />

          <board-numbers
            :value="type.inspectedMKD"
            size="lg"
            color="negative"
            showDynamic
            dynamic
          />
        </div>
        <div :style="{ 'flex-basis': $toRem(' 1461px') }" class="tw-flex-grow">
          <board-text-body
            offset="82px"
            icon="door"
            text="Охвачено мест общественного пользования"
            textWMax="976px"
            v-space-m:bottom="'116px'"
          />

          <board-numbers
            :value="type.publicPlacesCovered"
            size="lg"
            color="positive"
            showDynamic
            dynamic
          />
        </div>
      </div>

      <board-separator v-space-m:bottom="'69px'" />

      <board-caption text="В населенных пунктах" />
      <board-numbers
        :value="type.inSettlements"
        size="sm"
        color="positive"
        showDynamic
        dynamic
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
