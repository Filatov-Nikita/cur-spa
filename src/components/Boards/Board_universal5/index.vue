<template>
  <board-cover>
    <board-devider :cols="2">
      <template #section1>
        <board-offsets :l="142" :t="154" :b="89" :r="100">
          <board-text-body
            offset="70px"
            icon="bomb"
            text="Происшествие 1"
            v-space-m:bottom="'82px'"
          />

          <div class="slide-text-important" v-space-m:bottom="'83px'">
            <p>25 марта 2021 г.</p>
            <br />
            <p>г. Уфа, нефтеперерабатывающий завод «Уфаоргсинтез»</p>
          </div>

          <board-caption
            text="Организована работа 18 стационарных пунктов обогрева, выдвинут мобильный пункт обогрева Главного управления МЧС России."
            v-space-m:bottom="'86px'"
          />

          <board-vitals
            :vitals="[
              {
                icon: 'door',
                label: 'Количество эвакуированных',
                value: '1',
              },
              {
                icon: 'affected',
                label: 'Количество пострадавших',
                value: '1',
              },
              {
                icon: 'died',
                label: 'Количество погибших',
                value: '0',
              },
            ]"
          />
        </board-offsets>
      </template>
      <template #section2>
        <q-img src="school.jpg" width="100%" height="100%" />
      </template>
    </board-devider>
  </board-cover>
</template>

<script>
export default {};
</script>

<style>
</style>
