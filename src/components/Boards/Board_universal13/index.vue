<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="146"
      :t="146"
      :b="106"
      :r="215"
      :toPerc="['l']"
    >
      <board-text-body
        icon="road-techik"
        offset="73px"
        text="На дорогах республики задействовано техники"
        v-space-m:bottom="'126px'"
      />

      <board-numbers
        value="11 414"
        color="negative"
        size="lg"
        showDynamic
        dynamic
        v-space-m:bottom="'98px'"
      />

      <board-separator v-space-m:bottom="'82px'" />

      <div class="tw-flex tw-flex-wrap bottom-items">
        <div class="bottom-item">
          <board-caption
            text="на дорогах регионального значения"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            value="6 789"
            color="negative"
            size="sm"
            showDynamic
            dynamic
            class="tw-mt-auto"
          />
        </div>
        <div class="bottom-item">
          <board-caption
            text="на дорогах федерального значения"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            class="tw-mt-auto"
            value="6 789"
            color="positive"
            size="sm"
            showDynamic
            dynamic
          />
        </div>
        <div class="bottom-item">
          <board-caption
            text="на дорогах в городе Уфа"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            class="tw-mt-auto"
            value="875"
            color="positive"
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
.bottom-item {
  flex-basis: convertValues(781px);
  flex-grow: 1;
  margin: convertValues(50px 143px);
  display: flex;
  flex-direction: column;
}

.bottom-items {
  margin: convertValues(-50px -143px);
}
</style>
