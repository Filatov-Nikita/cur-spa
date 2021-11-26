<template>
  <board-cover v-if="type">
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
        <BoardsCarousel v-if="images.length>1" v-model="currentSlide" :slides="images" >
          <q-carousel-slide
            v-for="(slide,index) in images"
            :key="index"
            :name="index"
            
          >
            <q-img :src="slide.url"  height="100%"/>
          </q-carousel-slide>
        </BoardsCarousel> 
        <q-img
          v-else-if="images.length===1"
          :src="images[0].url"
          width="100%"
          height="100%"
          
          :style="{'min-height': $toRem('1450px')}"
        />
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
      currentSlide: 0,
      
    }
  },
  components: { BoardsCarousel },
  mixins: [currentSlideData],
};
</script>

<style>
</style>
