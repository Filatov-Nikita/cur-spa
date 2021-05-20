<template>
  <board-cover>
    <board-offsets :width="3264" :l="124" :t="169" :b="82" :toPerc="['l']">
      <board-text-body
        icon="heart-rate"
        textWMax="1901px"
        offset="81px"
        text="Выписано с выздоровлением за все время наблюдения"
        v-space-m:bottom="'53px'"
        v-space-m:left="'34px'"
      />
      <div v-space-m:bottom="'53px'" class="tw-inline-block">
        <board-mapping-numbers
          :left="{
            value: '20 753',
            color: 'positive',
            size: 'lg',
          }"
          :right="{
            value: '77,8%',
            color: 'white',
            size: 'sm',
          }"
          :arrowSize="636"
          v-space-m:bottom="'141px'"
          align="end"
          bottomSpace="100px"
        />

        <board-separator />
      </div>

      <board-period-numbers
        period="day"
        label="за прошедшие сутки"
        :valueStg="{
          value: '232',
          color: 'negative',
          size: 'sm',
          showDynamic: true,
          dynamic: true,
        }"
      />
    </board-offsets>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
