<template>
  <board-cover>
    <board-devider :cols="2">
      <template #section1>
        <board-offsets :l="144" :t="138" :b="134" :r="57">
          <board-text-body
            offset="95px"
            icon="lab-man"
            text="Происшествие 1"
            sizeText="caption"
            v-space-m:bottom="'155px'"
          />
          <div class="slide-text-important" v-space-m:bottom="'228px'">
            <p>25 марта 2021</p>
            <br />
            <p>г. Уфа, Нефтеперерабатывающий завод «Уфаоргсинтез»</p>
          </div>

          <div class="tw-flex tw-flex-wrap items">
            <div class="tw-w-1/2 item">
              <board-text-body
                offset="70px"
                sizeText="caption"
                icon="affected"
                text="Количество пострадавших"
                v-space-m:bottom="'25px'"
              />

              <board-numbers value="25" size="sm" color="negative" />
            </div>

            <div class="tw-w-1/2 item">
              <board-text-body
                offset="55px"
                sizeText="caption"
                icon="died"
                text="Количество погибших"
                v-space-m:bottom="'25px'"
              />

              <board-numbers value="25" size="sm" color="negative" />
            </div>
          </div>
        </board-offsets>
      </template>
      <template #section2>
        <q-img src="gas.jpg" width="100%" height="100%" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style scoped>
.items {
  margin-left: -40px;
  margin-right: -40px;
  margin-top: -30px;
}

.item {
  flex-basis: 602px;
  flex-grow: 1;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
