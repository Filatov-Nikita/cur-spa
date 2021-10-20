<template>
  <board-cover>
    <board-offsets :b="84" :l="124" :r="40" :t="117">
      <board-text-body
        offset="112px"
        icon="fuil"
        text="Выдано дезинфицирующего средства «АВирБак», л"
        v-space-m:bottom="'53px'"
      />

      <board-mapping-numbers
        :left="{ value: '20 451', color: 'positive', size: 'lg' }"
        :right="{ value: '91,43%', color: 'white', size: 'sm' }"
        :arrowSize="500"
        align="end"
        bottomSpace="100px"
        v-space-m:bottom="'41px'"
      />

      <board-separator v-space-m:bottom="'83px'" />

      <div class="tw-flex tw-flex-wrap items">
        <div class="item">
          <board-caption
            text="Количество муниципальных образований, получивших дезинфицирующее средство «АВирБак»"
          />

          <board-numbers
            value="55"
            color="positive"
            size="sm"
            showDynamic
            dynamic
          />
        </div>
        <div class="item">
          <board-caption
            text="Не обратились за получением дезинфицирующих средств (муниципальных образований)"
          />

          <board-numbers
            value="11"
            color="negative"
            size="sm"
            showDynamic
            dynamic
          />
        </div>
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//$
.item {
  flex-basis: convertValues(1428px);
  @apply tw-w-1/2 tw-flex-grow;
}
</style>
