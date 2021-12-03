<template>
  <board-cover>
    <board-devider leftWidth="36%" rightWidth="64%">
      <template #left>
        <board-offsets
          :b="114"
          :l="142"
          :r="50"
          :t="153"
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
            <p>{{ type.description }}</p>
            <!-- <p>25 марта 2021 г.</p> -->
            <!-- <br />
            <p>г.Уфа,</p><br>
            <p>Орджоникидзевский район</p> -->
          </div>

          <board-caption
            text="Вид работ"
            v-space-m:bottom="'30px'"
            class="tw-mt-auto"
          />
          <div class="slide-text-important">{{ type.typeOfWork }}</div>
        </board-offsets>
      </template>
      <template #right>
        <BoardSlider v-if="images" :images="images" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import BoardSlider from 'src/components/BoardSlider';

export default {
  components: { BoardSlider },
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
