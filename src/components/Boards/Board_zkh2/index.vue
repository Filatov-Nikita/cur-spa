<template>
  <board-cover>
    <board-devider :cols="2">
      <template #section1>
        <board-offsets
          :b="114"
          :l="142"
          :r="50"
          :t="153"
          class="tw-flex tw-flex-col tw-items-start"
          style="height: 100%"
        >
          <board-text-body
            offset="82px"
            icon="fire"
            text="Пожар на нефтеперерабатывающем заводе"
            v-space-m:bottom="'123px'"
          />
          <div class="slide-text-important" v-space-m:bottom="'130px'">
            <p>25 мая 2021 г.</p>
            <br />
            <p>г. Уфа, нефтеперерабатывающий завод «Уфаоргсинтез»</p>
          </div>

          <div class="tw-flex tw-flex-wrap tw-w-full" v-space-m:bottom="'87px'">
            <div class="tw-w-1/2 tw-flex-grow" style="flex-basis: 400px">
              <board-caption text="МКД в зоне" v-space-m:bottom="'35px'" />
              <board-numbers value="25" color="negative" size="sm" />
            </div>
            <div class="tw-w-1/2 tw-flex-grow" style="flex-basis: 400px">
              <board-caption text="СЗО в зоне" v-space-m:bottom="'35px'" />
              <board-numbers value="45" color="negative" size="sm" />
            </div>
          </div>

          <board-caption
            text="Статус"
            v-space-m:bottom="'35px'"
            class="tw-mt-auto"
          />
          <div class="board-status">Ликвидировано</div>
        </board-offsets>
      </template>
      <template #section2>
        <q-img
          src="fire.jpg"
          width="100%"
          height="100%"
          style="min-height: 1498px"
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
