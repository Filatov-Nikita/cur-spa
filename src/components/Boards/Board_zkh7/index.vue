<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="156"
      :t="135"
      :b="69"
      :r="276"
      :toPerc="['l']"
    >
      <div class="tw-flex" v-space-m:bottom="'103px'">
        <div style="flex-basis: 1661px" class="tw-flex-grow">
          <board-text-body
            offset="76px"
            icon="building"
            text="Осмотрено МКД"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            value="183"
            size="lg"
            color="negative"
            showDynamic
            dynamic
          />
        </div>
        <div style="flex-basis: 1461px" class="tw-flex-grow">
          <board-text-body
            offset="82px"
            icon="door"
            text="Охвачено мест общественного пользования"
            textWMax="976px"
            v-space-m:bottom="'216px'"
          />

          <board-numbers
            value="640"
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
        value="17"
        size="sm"
        color="positive"
        showDynamic
        dynamic
      />
    </board-offsets>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
