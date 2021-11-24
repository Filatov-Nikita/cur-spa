<template>
  <board-cover v-if="type" >
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="74"
          :t="100"
          :b="67"
          :r="157"
          :toPerc="['l']"
        >
          <board-text-body
            offset="62px"
            icon="people"
            text="Спасено человек с 2016 года"
            v-space-m:bottom="'198px'"
          />

          <board-numbers
            :value="type['quantity_warning_systems']"
            size="md2"
            color="positive"
            showDynamic
            dynamic
            v-space-m:bottom="'210px'"
          />
          <board-separator v-space-m:bottom="'47px'" />

          <board-period-numbers
            period="week"
            label="за неделю"
            :valueStg="{
              value: type.aWeekLeft,
              size: 'sm',
              color: 'negative',
              showDynamic: true,
              dynamic: false,
            }"
          />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1632"
          :l="127"
          :t="107"
          :b="87"
          :r="157"
          :toPerc="['l']"
        >
          <board-text-body
            offset="62px"
            icon="kids"
            text="Спасено детей с 2016 года"
            v-space-m:bottom="'148px'"
          />

          <board-numbers
            :value="type.childrenSaved"
            size="md"
            color="positive"
            v-space-m:bottom="'143px'"
          />

          <div style="max-width: 720px">
            <board-separator v-space-m:bottom="'47px'" />

            <board-period-numbers
              period="week"
              label="за неделю"
              :valueStg="{
                value: type.aWeekRight,
                size: 'sm',
                color: 'negative',
                showDynamic: true,
                dynamic: false,
              }"
            />
          </div>
        </board-offsets>
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  mixins: [currentSlideData],
};
</script>

<style>
</style>
