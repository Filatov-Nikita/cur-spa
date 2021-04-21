<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets
          :width="1632"
          :l="134"
          :t="150"
          :b="67"
          :r="187"
          :toPerc="['l']"
        >
          <board-text-body
            offset="62px"
            icon="people"
            text="Спасено человек с 2016 года"
            v-space-m:bottom="'198px'"
          />

          <board-numbers
            value="44 545"
            size="md"
            color="positive"
            showDynamic
            dynamic
            v-space-m:bottom="'143px'"
          />
          <board-separator v-space-m:bottom="'47px'" />

          <board-period-numbers
            period="week"
            label="за неделю"
            :valueStg="{
              value: '545',
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
          :t="137"
          :b="87"
          :r="157"
          :toPerc="['l']"
        >
          <board-text-body
            offset="62px"
            icon="kids"
            text="Спасено детей с 2016 года"
            v-space-m:bottom="'198px'"
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
