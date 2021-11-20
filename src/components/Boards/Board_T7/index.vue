<template>
  <board-cover v-if="type">
    <board-devider leftWidth="35%" rightWidth="65%">
      <template #left>
        <board-offsets
          :width="1152"
          :l="150"
          :t="130"
          :b="53"
          :r="99"
          :toPerc="['l']"
        >
          <board-text-body
            icon="plain"
            offset="92px"
            :text="type.text"
            v-space-m:bottom="'84px'"
          />

          <board-caption
            :text="type.description"
          />
        </board-offsets>
      </template>
      <template #right>
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
import BoardDevider from '../Helpers/BoardDevider.vue';
import currentSlideData from "src/mixins/currentSlideData"
import BoardsCarousel from 'src/components/BoardsCarousel';
export default {
    data() {
    return {
      currentSlide: 0,
      
    }
  },
  components: { BoardDevider,BoardsCarousel },
  mixins: [currentSlideData],
};
</script>

<style lang="scss" scoped>
//$
.bottom-item {
  flex-basis: convertValues(781px);
  flex-grow: 1;
  margin: convertValues(50px 143px);
}

.bottom-items {
  margin: convertValues(-50px -143px);
}
</style>
