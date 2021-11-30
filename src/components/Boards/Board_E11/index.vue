<template>
  <board-cover>
    <board-devider :cols="2">
      <template #section1>
        <board-offsets :l="135" :t="151" :b="134" :r="57">
          <board-text-body
            offset="54px"
            icon="bum"
            :text="type.text"
            sizeText="caption"
            v-space-m:bottom="'155px'"
          />
          <div class="slide-text-important" v-space-m:bottom="'228px'">
            <p>{{type.description}}</p>
            <!-- <p>25 марта 2021 г.</p>
            <br />
            <p>г. Уфа, нефтеперерабатывающий завод «Уфаоргсинтез»</p> -->
          </div>

          <div class="tw-flex tw-flex-wrap items">
            <div class="tw-w-1/2 item">
              <board-text-body
                offset="70px"
                sizeText="caption"
                icon="affected"
                text="Количество пострадавших"
                v-space-m:bottom="'25px'"
              />

              <board-numbers :value="type.numberOfVictims" size="sm" color="negative" />
            </div>

            <div class="tw-w-1/2 item">
              <board-text-body
                offset="55px"
                sizeText="caption"
                icon="died"
                text="Количество погибших"
                v-space-m:bottom="'25px'"
              />

              <board-numbers :value="type.theDeathToll" size="sm" color="negative" />
            </div>
          </div>
        </board-offsets>
      </template>
      <template #section2>
        <BoardSlider v-if="images" :images="images" v-model="currentSlide"/>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>

import BoardSlider from 'src/components/BoardSlider';
export default {
    data() {
    return {
      currentSlide: 0,
      
    }
  },
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

<style lang="scss" scoped>
//$
.items {
  margin-left: convertValues(-40px);
  margin-right: convertValues(-40px);
  margin-top: convertValues(-30px);
}

.item {
  flex-basis: convertValues(602px);
  flex-grow: 1;
  padding-left: convertValues(40px);
  padding-right: convertValues(40px);
  margin-top: convertValues(30px);
  margin-bottom: convertValues(30px);
}
</style>
