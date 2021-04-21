<template>
  <board-cover>
    <board-devider leftWidth="67%" rightWidth="33%">
      <template #left>
        <board-offsets :width="2189" :l="134" :t="149" :b="73" :toPerc="['l']">
          <board-text-body
            icon="corona-virus"
            textWMax="1111px"
            offset="91px"
            text="Зарегистрировано случаев новой коронавирусной инфекции (всего)"
            v-space-m:bottom="'40px'"
          />

          <board-numbers
            value="26 687"
            color="negative"
            size="lg"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'53px'" wmax="1538px" />

          <div class="tw-flex tw-flex-wrap" style="max-width: 80%">
            <board-period-numbers
              period="day"
              label="за прошедшие сутки"
              :valueStg="{
                value: '165',
                color: 'negative',
                size: 'sm',
                showDynamic: true,
                dynamic: true,
              }"
              v-space-m:right="'230px'"
              v-space-m:bottom="'100px'"
            />

            <board-period-numbers
              period="week"
              label="за неделю"
              :valueStg="{
                value: '1 121',
                color: 'positive',
                size: 'sm',
                showDynamic: true,
                dynamic: false,
              }"
            />
          </div>
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :width="1075" :l="236" :t="149" :b="73" :toPerc="['l']">
          <board-text-body
            icon="up-index"
            textWMax="531px"
            offset="88px"
            text="Темп прироста (Индекс)"
            v-space-m:bottom="'50px'"
          />

          <board-numbers
            value="1"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'20px'"
          />

          <board-caption
            text="Уровень заболеваемости на 100 тыс. населения"
            wMax="581px"
            v-space-m:bottom="'30px'"
          />
          <board-numbers
            value="463"
            color="white"
            size="sm"
            showDynamic
            :dynamic="false"
          />
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {
  name: 'Board1',
};
</script>
<style scoped>
.bottom-numbers {
  max-width: 1484px;
  border-top: 1px solid theme('colors.white');
  @apply tw-flex tw-justify-between;
}
</style>
