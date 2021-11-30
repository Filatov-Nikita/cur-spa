<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="127" :t="119" :b="100" :toPerc="['l']">
          <board-text-body
            icon="hospital"
            textWMax="978px"
            offset="101px"
            :text="type.name"
            v-space-m:bottom="'50px'"

          />

          <board-numbers
            :value="type.areHospitalizedOnTheLeft"
            color="negative"
            size="lg"
            showDynamic
            :dynamic="true"
            v-space-m:bottom="'20px'"
          />

          <board-separator wmax="1273px" v-space-m:bottom="'33px'" />

          <div class="tw-flex tw-flex-wrap">
            <div
              class="tw-flex tw-flex-col"
              v-space-m:right="'203px'"
              :style="{'flex-basis': $toRem(' 594px')}"
            >
              <board-caption text="В отделении интенсивной терапии" />

              <board-numbers
                :value="type.inTheIntensiveCareUnit"
                color="white"
                size="sm"
                showDynamic
                :dynamic="true"
                class="tw-mt-auto"
              />
            </div>
            <div
              class="tw-flex tw-flex-col"
              :style="{'flex-basis': $toRem(' 694px')}"
            >
              <board-caption text="На ИВЛ" wMax="594px" />

              <board-numbers
                :value="type.onVentilator"
                color="white"
                size="sm"
                showDynamic
                :dynamic="false"
                class="tw-mt-auto"
              />
            </div>
          </div>
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1633"
          :l="118"
          :t="119"
          :b="82"
          :r="50"
          :toPerc="['l']"
        >
          <board-text-body
            icon="home"
            textWMax="978px"
            offset="113px"
            text="Находятся на амбулаторном лечении"
            v-space-p:left="'63px'"
            v-space-m:bottom="'67px'"
          />

          <board-numbers
            :value="type.areOnOutpatientTreatmentOnTheRight"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="true"
            arrowOffset="0"
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

<style>
</style>
