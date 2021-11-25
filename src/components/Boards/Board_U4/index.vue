<template>
  <board-cover v-if="type">
    <board-devider :cols="2">
      <template #section1>
        <board-offsets :l="142" :t="154" :b="89" :r="100">
          <board-text-body
            offset="70px"
            iconChoice
            :icon="type.selectIconAtTheTopColumn1"
            :text="type.topTextColumn1"
            v-space-m:bottom="'82px'"
          />

          <div class="slide-text-important" v-space-m:bottom="'83px'">
            <p>{{type.dateColumn1}}</p>
            <br />
            <p>{{type.placeColumn1}}</p>
          </div>

          <board-caption
            :text="type.middleTextColumn1"
            v-space-m:bottom="'86px'"
          />

          <board-vitals
            :vitals="[
              {
                iconChoice:true,
                icon: type.selectIcon1InTheBottomColumn1,
                label: type.text1AtTheBottomColumn1,
                value: type.value1AtTheBottomRightSideColumn1,
              },
              {
                iconChoice:true,
                icon: type.selectIcon2InTheBottomColumn1,
                label: type.text2AtTheBottomColumn1,
                value: type.value2AtTheBottomRightSideColumn1,
              },
              {
                iconChoice:true,
                icon: type.selectIcon2InTheBottomColumn1,
                label: type.text3AtTheBottomColumn1,
                value: type.value3AtTheBottomRightSideColumn1,
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
            <q-img :src="slide.url" contain :ratio="4/3" height="100%"/>
          </q-carousel-slide>
        </BoardsCarousel> 
        <q-img
          v-else-if="images.length===1"
          :src="images[0].url"
          width="100%"
          height="100%"
          contain :ratio="4/3"
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
