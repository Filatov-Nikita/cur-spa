<template>
  <board-cover>
    <board-devider leftWidth="26.7%" rightWidth="73.3%">
      <template #left>
        <board-offsets :width="871" :l="148" :t="114" :b="78" :toPerc="['l']">
          <board-text-body
            offset="63px"
            icon="telescop"
            text="Работает лабораторий"
            textWMax="545px"
            v-space-m:bottom="'63px'"
          />
          <board-numbers
            value="25"
            size="md"
            color="negative"
            showDynamic
            dynamic
            v-space-m:bottom="'115px'"
          />

          <board-separator wmax="577px" v-space-m:bottom="'70px'" />

          <div class="slide-text-caption">Из них частных</div>
          <div class="slide-text-sm tw-text-white">6</div>
        </board-offsets>
      </template>

      <template #right>
        <board-offsets :width="2393" :l="148" :t="114" :b="78" :toPerc="['l']">
          <board-text-body
            offset="115px"
            icon="colba"
            text="С начала пандемии выполнено всего исследований"
            textWMax="1600px"
            align="start"
            v-space-m:bottom="'68px'"
          />

          <board-numbers
            value="2 371 787"
            size="md"
            color="positive"
            showDynamic
            dynamic
            v-space-m:bottom="'139px'"
          />

          <board-separator wmax="2016px" v-space-m:bottom="'68px'" />

          <div class="tw-flex tw-flex-wrap">
            <board-period-numbers
              period="day"
              label="за прошедшие сутки"
              :valueStg="{
                value: '6 789',
                color: 'negative',
                size: 'sm',
                showDynamic: true,
                dynamic: true,
              }"
              v-space-m:right="'259px'"
              v-space-m:bottom="'59px'"
              style="flex-basis: 804px"
            />

            <div style="flex-basis: 1077px">
              <board-caption
                text="Уровень тестирования на 100 тыс. населения"
                wMax="1017px"
                v-space-m:bottom="'13px'"
              />
              <board-numbers value="249,5" showDynamic dynamic />
            </div>
          </div>
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {
  name: 'Board4',
};
</script>
