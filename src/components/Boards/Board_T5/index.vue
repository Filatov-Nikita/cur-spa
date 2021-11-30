<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="146"
      :t="106"
      :b="86"
      :r="215"
      :toPerc="['l']"
    >
      <board-text-body
        icon="road-techik"
        offset="73px"
        text="На дорогах республики задействовано техники"
        v-space-m:bottom="'56px'"
      />

      <board-numbers
        :value="type.techniquesAreInvolvedOnTheRoadsOfTheRepublic"
        color="negative"
        size="lg"
        showDynamic
        dynamic
        v-space-m:bottom="'58px'"
      />

      <board-separator v-space-m:bottom="'52px'" />

      <div class="tw-flex tw-flex-wrap bottom-items">
        <div class="bottom-item">
          <board-caption
            text="на дорогах регионального значения"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            :value="type.onRegionalRoads"
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
            :value="type.onFederalRoads"
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
            :value="type.onTheRoadsInTheCityOfUfa"
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

export default {
    props: {
    type: {
      required: true,
      type: Object,
    },
  },
};
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
