<template>
  <board-cover v-if="type" >
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
            icon="bus"
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
        <BoardSlider v-if="images" :images="images" v-model="currentSlide"/>
        
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import BoardDevider from '../Helpers/BoardDevider.vue';

import BoardSlider from 'src/components/BoardSlider';
export default {
    data() {
    return {
      currentSlide: 0,
      
    }
  },
  components: { BoardDevider,BoardSlider },
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
.bottom-item {
  flex-basis: convertValues(781px);
  flex-grow: 1;
  margin: convertValues(50px 143px);
}

.bottom-items {
  margin: convertValues(-50px -143px);
}
</style>
