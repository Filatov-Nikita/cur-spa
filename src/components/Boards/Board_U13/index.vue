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
        iconChoice
        :icon="type.selectIconAtTheTop"
        offset="73px"
        :text="type.topText"
        v-space-m:bottom="'126px'"
      />

      <board-numbers
        :value="type.value"
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
            :text="type.textAtTheBottomColumn1"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            :value="type.valueIAtTheBottomColumn1"
            color="negative"
            size="sm"
            showDynamic
            dynamic
            class="tw-mt-auto"
          />
        </div>
        <div class="bottom-item">
          <board-caption
            :text="type.textAtTheBottomColumn2"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            class="tw-mt-auto"
            :value="type.valueIAtTheBottomColumn2"
            color="positive"
            size="sm"
            showDynamic
            dynamic
          />
        </div>
        <div class="bottom-item">
          <board-caption
            :text="type.textAtTheBottomColumn3"
            v-space-m:bottom="'27px'"
          />
          <board-numbers
            class="tw-mt-auto"
            :value="type.valueIAtTheBottomColumn3"
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
