<template>
  <board-cover>
    <board-devider :cols="2">
      <template #section1>
        <board-offsets :l="142" :t="154" :b="89" :r="100">
          <board-text-body
            offset="70px"
            icon="bomb"
            :text="type.text"
            v-space-m:bottom="'82px'"
          />

          <div class="slide-text-important" v-space-m:bottom="'83px'">
            <!-- <p>25 марта 2021 г.</p>
            <br />
            <p>г. Уфа, нефтеперерабатывающий завод «Уфаоргсинтез»</p> -->
            <p>
              {{type.description}}
            </p>
          </div>

          <board-caption
            :text="type.description2"
            v-space-m:bottom="'86px'"
          />

          <board-vitals
            :vitals="[
              {
                icon: 'door',
                label: 'Количество эвакуированных',
                value: type.numberOfEvacuees,
              },
              {
                icon: 'affected',
                label: 'Количество пострадавших',
                value: type.numberOfVictims,
              },
              {
                icon: 'died',
                label: 'Количество погибших',
                value: type.theDeathToll,
              },
            ]"
          />
        </board-offsets>
      </template>
      <template #section2>
        <BoardSlider v-if="images" :images="images" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>

import BoardSlider from 'src/components/BoardSlider';
export default {
  components: {BoardSlider},
    props: {
    type: {
      required: true,
      type: Object,
    },
    images: {
      required: true,
      type: Array,
    },
  },
};
</script>

<style>
</style>
