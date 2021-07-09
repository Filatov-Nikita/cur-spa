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
            icon="bus"
            offset="92px"
            text="Объединенный автовокзал РБ"
            v-space-m:bottom="'84px'"
          />

          <board-caption
            text="27 мая автобус Башавтотранс столкнулся с легковым автомобилем. Причиной ДТП стал выезд водителя легковушки на встречную полосу. К счастью, никто из пассажиров автобуса не пострадал, водитель легкового автомобиля доставлен в больницу."
          />
        </board-offsets>
      </template>
      <template #right>
        <q-img src="bus.jpg" width="100%" height="100%" />
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
