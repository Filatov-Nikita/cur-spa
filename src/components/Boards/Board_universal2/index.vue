<template>
  <board-cover>
    <board-devider :cols="3">
      <template #section1>
        <board-offsets :l="119" :t="100" :b="76" :r="92">
          <board-text-body
            offset="71px"
            icon="died"
            text="Количество погибших в пожарах за неделю"
            sizeText="caption"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            value="18"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: '49',
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
        <board-offsets :l="115" :t="107" :b="76" :r="98">
          <board-text-body
            offset="80px"
            icon="affected"
            text="Количество травмированных в пожарах за неделю"
            sizeText="caption"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            value="8"
            color="positive"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: '49',
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
        <board-offsets :l="91" :t="96" :b="76" :r="105">
          <board-text-body
            sizeText="caption"
            offset="83px"
            icon="saved"
            text="Количество спасенных в пожарах за неделю"
            v-space-m:bottom="'66px'"
          />

          <board-numbers
            value="1"
            color="negative"
            size="md"
            showDynamic
            :dynamic="false"
            v-space-m:bottom="'98px'"
          />

          <board-separator v-space-m:bottom="'51px'" />

          <board-period-numbers
            label="с начала года"
            period="year"
            :valueStg="{
              color: 'negative',
              value: '49',
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
