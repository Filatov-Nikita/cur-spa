<template>
  <board-cover>
    <board-devider leftWidth="36%" rightWidth="64%">
      <template #left>
        <board-offsets
          :b="84"
          :l="142"
          :r="50"
          :t="113"
          class="tw-flex tw-flex-col"
          style="height: 100%"
        >
          <board-text-body
            offset="73px"
            icon="camera"
            text="Название фотоотчета"
            v-space-m:bottom="'150px'"
          />
          <div class="slide-text-important">
            <p>25 мая 2021 г.</p>
            <br />
            <p>г.Уфа,</p><br>
            <p>Орджоникидзевский район</p>
          </div>

          <board-caption
            text="Вид работ"
            v-space-m:bottom="'30px'"
            class="tw-mt-auto"
          />
          <div class="slide-text-important">дезинфекция МОПов</div>
        </board-offsets>
      </template>
      <template #right>
        <q-img
          src="mop.jpg"
          width="100%"
          height="100%"
          :style="{'min-height': $toRem('1450px')}"
        />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
