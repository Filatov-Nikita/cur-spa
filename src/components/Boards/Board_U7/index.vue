<template>
  <board-cover v-if="type" >
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="160"
          :t="100"
          :b="118"
          :r="87"
          :toPerc="['l']"
        >
          <board-text-body
            offset="67px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            textWMax="1139px"
            v-space-m:bottom="'27px'"
          />

          <board-numbers
            :value="type.valueColumn1"
            size="md"
            color="negative"
            showDynamic
            dynamic
          />

          <board-separator v-space-m:bottom="'73px'" />

          <board-caption
            :text="type.textAtTheBottomColumn1"
            wMax="903px"
            v-space-m:bottom="'23px'"
          />
          <board-numbers :value="type.valueInTheMiddleColumn1" size="sm" color="positive" />
        </board-offsets>
      </template>
      <template #right>
         <!-- <q-carousel
          animated
          v-model="slide"
          :height="$toRem('1450px')"
          control-color="purple"
          navigation
          infinite
        >
          <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg"></q-carousel-slide>
          <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg"></q-carousel-slide>
          <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg"></q-carousel-slide>
          <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg"></q-carousel-slide>
        </q-carousel>
        <div
          class="tw-flex tw-items-center tw-justify-center controls"
          
        >
          <div class="controll">

          </div>
        </div>  -->
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
      slide: 1
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

<style>
</style>
<style lang="scss" scoped>

</style>