<template>
  <board-cover>
    <board-devider :cols="3">
      <template #section1>
        <board-offsets :l="119" :t="60" :b="66" :r="92">
          <board-text-body
            offset="91px"
            icon="road-way"
            text="Количество происшествий"
            sizeText="caption"
            v-space-m:bottom="'46px'"
          />

          <board-numbers
            value="0"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'40px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: '9',
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: '+1', size: 'xs' }"
            :right="{ color: 'white', value: '+15%', size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section2>
        <board-offsets :l="115" :t="67" :b="66" :r="98">
          <board-text-body
            offset="116px"
            icon="affected"
            text="Количество пострадавших"
            sizeText="caption"
            v-space-m:bottom="'46px'"
          />

          <board-numbers
            value="0"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'40px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: '5',
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />

          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: '+1', size: 'xs' }"
            :right="{ color: 'white', value: '+15%', size: 'xs' }"
            :arrowSize="315"
          />
        </board-offsets>
      </template>
      <template #section3>
        <board-offsets :l="91" :t="66" :b="66" :r="105">
          <board-text-body
            sizeText="caption"
            offset="70px"
            icon="died"
            text="Количество погибших"
            v-space-m:bottom="'46px'"
          />

          <board-numbers
            value="0"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'40px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: '7',
              size: 'sm',
            }"
            v-space-m:bottom="'55px'"
          />
          <board-caption
            text="по сравнению с прошлым годом"
            v-space-m:bottom="'20px'"
          />
          <board-mapping-numbers
            :left="{ color: 'negative', value: '+10', size: 'xs' }"
            :right="{ color: 'white', value: '+47%', size: 'xs' }"
            :arrowSize="249"
          />
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
