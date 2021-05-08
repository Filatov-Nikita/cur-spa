<template>
  <board-cover>
    <board-offsets :b="114" :l="124" :r="40" :t="157">
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
        v-space-m:bottom="'141px'"
      />

      <board-separator v-space-m:bottom="'53px'" />

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

<style scoped>
.item {
  flex-basis: 1428px;
  @apply tw-w-1/2 tw-flex-grow;
}
</style>
