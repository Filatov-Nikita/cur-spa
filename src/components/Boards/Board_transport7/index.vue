<template>
  <board-cover>
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
            text="На объектах авиасообщения"
            v-space-m:bottom="'84px'"
          />

          <board-caption
            text="РФ с 15 апреля по 1 июня ограничила пассажирское авиасообщение с Турцией из-за новой вспышки коронавируса в этой стране. Количество рейсов сокращено до двух в неделю на взаимной основе, их выполняют «Аэрофлот» и Turkish Airlines."
          />
        </board-offsets>
      </template>
      <template #right>
        <q-img src="broken-plain.jpg" width="100%" height="100%" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import BoardDevider from '../Helpers/BoardDevider.vue';
export default {
  components: { BoardDevider },
};
</script>

<style scoped>
.bottom-item {
  flex-basis: 781px;
  flex-grow: 1;
  margin: 50px 143px;
}

.bottom-items {
  margin: -50px -143px;
}
</style>
