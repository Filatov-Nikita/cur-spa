<template>
  <board-cover>
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

<style>
</style>
