<template>
  <board-cover v-if="type">
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
            icon="learning"
            text="Количество профилактических рейдов за неделю"
            textWMax="1139px"
            v-space-m:bottom="'27px'"
          />

          <board-numbers
            :value="type.numberOfPreventiveRaidsPerWeek"
            size="md"
            color="negative"
            showDynamic
            dynamic
          />

          <board-separator v-space-m:bottom="'73px'" />

          <board-caption
            text="Количество граждан из групп риска, взятые под кураторство"
            wMax="903px"
            v-space-m:bottom="'23px'"
          />
          <board-numbers :value="type.theNumberOfCitizensFromRiskGroupsTakenForSupervision" size="sm" color="positive" />
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
        <BoardsCarousel v-if="images.length>1" v-model="currentSlide" :slides="images" >
          <q-carousel-slide
            v-for="(slide,index) in images"
            :key="index"
            :name="index"
            
          >
            <q-img :src="slide.url" width="100%"  style="min-height:100%"/>
          </q-carousel-slide>
        </BoardsCarousel> 
        <q-img
          v-else-if="images.length===1"
          :src="images[0].url"
          width="100%"
          height="100%"
          :style="{'min-height': $toRem('1450px')}"
        />
        <!-- <q-img src="bus3.jpeg" width="100%" height="100%" :style="{'min-height': $toRem('1450px')}" /> -->
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
import BoardsCarousel from 'src/components/BoardsCarousel';
export default {
  data() {
    return {
      currentSlide: 1,
      slide: 1
    }
  },
  components: {BoardsCarousel},
  mixins: [currentSlideData],
};
</script>

<style>
</style>
<style lang="scss" scoped>

</style>