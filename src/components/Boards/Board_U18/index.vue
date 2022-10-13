<template>
  <board-cover>
    <board-devider leftWidth="39%" rightWidth="61%">
      <template #left>
        <q-img
          :src="images[0].url"
          width="100%"
          height="100%"
          contain
          style="max-height: 95rem"
        />
      </template>

      <template #right>
        <board-offsets :l="147" :t="270" :r="126" class="cities">
          <masonry :cols="2" :gutter="80">
            <div class="slide-text-body">
              {{ type.textOnTheRight }}
            </div>
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
  data() {
    return {
      cities: ["г. Салават"],
    };
  },
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
.cities {
  height: convertValues(1254px);
  overflow-x: hidden;
}
</style>
