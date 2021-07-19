<template>
  <board-cover>
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
            text="Общее количество установленных пожарных извещателей в РБ"
            v-space-m:bottom="'198px'"
          />

          <board-numbers
            value="332058"
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
              value: '1052',
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
            value="548"
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
                value: '45',
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
export default {};
</script>

<style>
</style>
