<template>
  <board-cover>
    <board-offsets
      :width="3264"
      :l="124"
      :t="103"
      :r="150"
      :b="82"
      :toPerc="['l']"
    >
      <board-text-body
        icon="bed"
        textWMax="2239px"
        offset="73px"
        text="Всего для пациентов с НКИ доступно"
        v-space-m:bottom="'55px'"
      />
      <board-numbers
        value="2 897"
        color="negative"
        size="md"
        showDynamic
        :dynamic="true"
        v-space-m:bottom="'29px'"
      />
      <board-separator v-space-m:bottom="'38px'" />

      <div>
        <board-mapping-numbers
          label="Занято"
          :left="{
            value: '2 245',
            color: 'positive',
            size: 'sm',
          }"
          :right="{
            value: '77,5%',
            color: 'white',
            size: 'xs',
            showDynamic: true,
            dynamic: true,
          }"
          :arrowSize="378"
          align="end"
          bottomSpace="20px"
        />
        <board-mapping-numbers
          label="Свободно"
          :left="{
            value: '652',
            color: 'positive',
            size: 'sm',
          }"
          :right="{
            value: '22,5%',
            color: 'white',
            size: 'xs',
            showDynamic: true,
            dynamic: true,
          }"
          :arrowSize="536"
          align="end"
          bottomSpace="20px"
        />
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
