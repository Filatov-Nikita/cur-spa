<template>
  <board-cover>
    <board-devider leftWidth="69%" rightWidth="31%">
      <template #left>
        <board-offsets :b="390" :l="156" :r="184" :t="109">
          <board-text-body
            offset="88px"
            icon="trassa"
            text="Произведен обкос улиц, км"
            v-space-m:bottom="'35px'"
          />
          <board-numbers
            :value="type.totalNumberOfFireDetectorsInRB"
            color="negative"
            size="lg"
            showDynamic
            dynamic
            v-space-m:bottom="'143px'"
          />

        </board-offsets>
      </template>
      <template #right>
        <board-offsets :b="154" :l="136" :r="337" :t="109">
          <board-offsets>
                      <board-period-numbers
            label="Устанавлено пожарных извещателей в неделю"
            period="year"
            :valueStg="{
              color: 'positive',
              value: '21',
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />
            <!-- <board-text-body
              textWMax="349px"
              icon="dvor"
              offset="89px"
              text="Произведен обкос дворов, км"
              sizeText="caption"
              v-space-m:bottom="'39px'"
            />
            <board-numbers
              :value="type.mowedOutYards"
              color="positive"
              size="sm"
              showDynamic
              dynamic
              v-space-m:bottom="'333px'"
            /> -->
          </board-offsets>
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

<style>
</style>
