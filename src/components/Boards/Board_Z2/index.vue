<template>
  <board-cover >
    <board-devider :cols="2">
      <template #section1>
        <board-offsets
          :b="54"
          :l="142"
          :r="50"
          :t="83"
          class="tw-flex tw-flex-col tw-items-start"
          style="height: 100%"
        >
          <board-text-body
            offset="82px"
            icon="fire"
            :text="type.text"
            v-space-m:bottom="'83px'"
          />
          <div class="slide-text-important" v-space-m:bottom="'80px'">
            <p>25 мая 2021 г.</p>
            <br />
            <p>{{type.description}}</p>
          </div>

          <div class="tw-flex tw-flex-wrap tw-w-full" v-space-m:bottom="'27px'">
            <div class="tw-w-1/2 tw-flex-grow" style="flex-basis: 400px">
              <board-caption text="МКД в зоне" v-space-m:bottom="'35px'" />
              <board-numbers :value="type.mkdInTheZone" color="negative" size="sm" />
            </div>
            <div class="tw-w-1/2 tw-flex-grow" style="flex-basis: 400px">
              <board-caption text="СЗО в зоне" v-space-m:bottom="'35px'" />
              <board-numbers :value="type.szoInTheZone" color="negative" size="sm" />
            </div>
          </div>

          <board-caption
            text="Статус"
            v-space-m:bottom="'35px'"
            class="tw-mt-auto"
          />
          <div class="board-status">{{type.status}}</div>
        </board-offsets>
      
      </template>
      <template #section2>
        
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
