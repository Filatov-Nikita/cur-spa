<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="146"
      :t="146"
      :b="106"
      :r="116"
      :toPerc="['l']"
    >
      <board-text-body
        icon="wine"
        offset="71px"
        textWMax="1433px"
        text="Количество зафиксированных случаев с водителями, находящимися в состоянии алкогольного опьянения"
        v-space-m:bottom="'126px'"
      />

      <div class="tw-flex tw-flex-wrap container tw-items-center">
        <board-numbers
          value="1 414"
          color="negative"
          size="lg"
          showDynamic
          dynamic
          v-space-m:bottom="'98px'"
          class="numbers"
        />

        <div class="accident">
          <board-text-body
            icon="accident"
            offset="54px"
            text="Из них количество ДТП"
            v-space-m:bottom="'60px'"
          />

          <board-mapping-numbers
            align="bottom"
            bottomSpace="55px"
            :arrowSize="220"
            offset="60px"
            :left="{
              color: 'positive',
              size: 'md2',
              value: '877',
            }"
            :right="{
              color: 'white',
              size: 'xs',
              value: '10%',
            }"
          />
        </div>
      </div>

      <board-separator v-space-m:bottom="'82px'" />

      <board-period-numbers
        period="year"
        label="с начала года"
        :valueStg="{
          color: 'negative',
          size: 'sm',
          value: '6 789',
        }"
      />
    </board-offsets>
  </board-cover>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin-left: -79.5px;
  margin-right: -79.5px;
  margin-top: -50px;
}
.numbers,
.accident {
  margin-left: 79.5px;
  margin-right: 79.5px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.numbers {
  flex-basis: 1661px;
}

.accident {
  flex-basis: 1172px;
}
</style>
