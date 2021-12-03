<template>
  <board-cover>
    <board-devider leftWidth="61%" rightWidth="39%">
      <template #left>
        <board-offsets
          :b="114"
          :l="142"
          :r="50"
          :t="153"
          class="tw-flex tw-flex-col tw-items-start"
          style="height: 100%"
        >
          <board-text-body
            offset="112px"
            icon="worktime"
            text="Режим работы предприятий ЖКХ"
            v-space-m:bottom="'123px'"
          />

          <div class="slide-text-sm tw-text-positive tw-font-bold tw-font-roboto board-li-el">{{type.operatingModeOfZKH}}</div>
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :b="114"
          :l="142"
          :r="50"
          :t="153"
          class="tw-flex tw-flex-col tw-items-start"
          style="height: 100%"
        >
          <board-text-body
            offset="93px"
            icon="warning"
            text="Аварийные ситуации со значительными последствиями"
            v-space-m:bottom="'123px'"
          />

          <board-numbers
            :value="type.emergencySituationsWithSignificantConsequences"
            color="negative"
            size="lg"
            showDynamic
            dynamic
          />
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

<style lang="scss" scoped>
.board-li-el::before {
  margin-right: convertValues(108px);
}
</style>
