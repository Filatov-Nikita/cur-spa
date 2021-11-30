<template>
  <board-cover v-if="type" >
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
            <div class="tw-w-1/2 tw-flex-grow" :style="{'flex-basis': $toRem(' 400px')}">
              <board-caption text="МКД в зоне" v-space-m:bottom="'35px'" />
              <board-numbers :value="type.mkdInTheZone" color="negative" size="sm" />
            </div>
            <div class="tw-w-1/2 tw-flex-grow" :style="{'flex-basis': $toRem(' 400px')}">
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
