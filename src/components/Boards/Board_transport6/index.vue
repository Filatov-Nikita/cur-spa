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
            text="1 марта в Уфе произошла авария с участием двух
      пассажирских автобусов. Об этом сообщили в пресс-службе региональной
      госавтоинспекции. ДТП произошло около двух часов дня по московскому
      времени напротив дома Ульяновых, 31. По предварительной версии, виновником
      аварии стал 27-летний водитель автобуса НефАЗ, который следовал по
      маршруту. Он не успел отреагировать на остановившийся на запрещающий
      сигнал светофора Renault Sandero и столкнулся с ним. Легковой автомобиль в
      свою очередь наехал на стоящие ВАЗ-2114 и микроавтобус Peugeot Boxer,
      который в этот момент был на маршруте, но без пассажиров. "
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
