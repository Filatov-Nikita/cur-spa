<template>
  <board-cover  v-if="type" >
    <board-devider leftWidth="36%" rightWidth="64%">
      <template #left>
        <board-offsets
          :b="84"
          :l="142"
          :r="50"
          :t="113"
          class="tw-flex tw-flex-col"
          style="height: 100%"
        >
          <board-text-body
            offset="73px"
            icon="camera"
            :text="type.text"
            v-space-m:bottom="'150px'"
          />
          <div class="slide-text-important">
            <p>{{type.description}}</p>
            <!-- <p>25 мая 2021 г.</p>
            <br />
            <p>г.Уфа,</p><br>
            <p>Орджоникидзевский район</p> -->
          </div>

          <board-caption
            text="Вид работ"
            v-space-m:bottom="'30px'"
            class="tw-mt-auto"
          />
          <div class="slide-text-important">{{type.typeOfWork}}</div>
        </board-offsets>
      </template>
      <template #right>
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
  components: {BoardsCarousel},
  mixins: [currentSlideData],
};
</script>

<style>
</style>
