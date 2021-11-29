<template>
  <board-cover >
    <board-devider leftWidth="39%" rightWidth="61%">
      <template #left>
        <board-offsets :l="123" :t="127" :r="149" :b="70" class="cities">
          <board-text-body
            icon="continent"
            :text="type.titleLeftSide"
            offset="99px"
            v-space-m:bottom="'58px'"
          />

          <board-numbers
            :value="type.valueLeftSide"
            color="negative"
            size="lg"
            showDynamic
            dynamic
          />
        </board-offsets>
      </template>

      <template #right>
        <board-offsets :l="147" :t="270" :r="126" class="cities">
          <masonry :cols="2" :gutter="80">
            <span class="slide-text-body">
              {{type.textRightSide}}
            </span>
            <!-- <div
              class="slide-text-body"
              v-for="(item, index) in type.cities"
              :key="index"
            >
              {{ item }}
            </div> -->
          </masonry>
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>

export default {
    props: {
    type: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      cities: ['г. Салават'],
    };
  },
  
};
</script>

<style lang="scss" scoped>
//$
.cities {
  height: convertValues(1254px);
  overflow-x: hidden;
}
</style>
