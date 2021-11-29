<template>
  <board-cover  v-if="type">
    <board-offsets
      :width="3264"
      :l="84"
      :t="100"
      :r="96"
      :b="54"
      :toPerc="['l']"
      v-space-m:left="'64px'"
    >
      <board-text-body
        offset="67px"
        icon="phone"
        text="Поступило сообщений"
        textWMax="2640px"
        v-space-m:bottom="'55px'"
      />

      <div
        class="tw-flex tw-flex-wrap tw-items-start"
        v-space-m:bottom="'39px'"
      >
        <board-numbers
          :value="type.messagesReceived"
          size="lg"
          color="positive"
          :style="{'flex-basis': $toRem(' 1693px')}"
          class="tw-flex-grow tw-whitespace-nowrap"
          v-space-m:right="'200px'"
        />
        <!-- <board-mapping-numbers /> -->
      </div>

      <board-separator v-space-m:bottom="'50px'" />

      <div class="tw-flex tw-flex-wrap">
        <board-period-numbers
          period="signal"
          label="Объектов под угрозой"
          :valueStg="{
            value: type.objectsUnderThreat,
            color: 'negative',
            size: 'sm',
            showDynamic: true,
            dynamic: true,
          }"
          v-space-m:right="'259px'"
          v-space-m:bottom="'59px'"
        />

        <board-period-numbers
          period="stop"
          label="Ложные сообщения"
          :valueStg="{
            value: type.falseMessages,
            color: 'negative',
            size: 'sm',
            showDynamic: true,
            dynamic: true,
          }"
          v-space-m:right="'259px'"
          v-space-m:bottom="'59px'"
        />
      </div>
    </board-offsets>
  </board-cover>
</template>

<script>

export default {
    props: {
    type: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style>
</style>

