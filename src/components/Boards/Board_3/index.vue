<template>
  <board-cover>
    <board-devider leftWidth="50%" rightWidth="50%">
      <template #left>
        <board-offsets :width="1633" :l="127" :t="169" :b="82" :toPerc="['l']">
          <board-text-body
            icon="hospital"
            textWMax="978px"
            offset="101px"
            text="Находятся на стационарном лечении"
            v-space-m:bottom="'50px'"

          />

          <board-numbers
            value="414"
            color="negative"
            size="lg"
            showDynamic
            :dynamic="true"
            v-space-m:bottom="'20px'"
          />

          <board-separator wmax="1273px" v-space-m:bottom="'33px'" />

          <div class="tw-flex tw-flex-wrap">
            <div
              class="tw-flex tw-flex-col"
              v-space-m:right="'203px'"
              v-space-m:bottom="'100px'"
              style="flex-basis: 594px"
            >
              <board-caption text="В отделении интенсивной терапии" />

              <board-numbers
                value="57"
                color="white"
                size="sm"
                showDynamic
                :dynamic="true"
                class="tw-mt-auto"
              />
            </div>
            <div
              class="tw-flex tw-flex-col"
              style="flex-basis: 694px"
              v-space-m:bottom="'100px'"
            >
              <board-caption text="На ИВЛ" wMax="594px" />

              <board-numbers
                value="9"
                color="white"
                size="sm"
                showDynamic
                :dynamic="false"
                class="tw-mt-auto"
              />
            </div>
          </div>
        </board-offsets>
      </template>
      <template #right>
        <board-offsets
          :width="1633"
          :l="118"
          :t="149"
          :b="82"
          :r="50"
          :toPerc="['l']"
        >
          <board-text-body
            icon="home"
            textWMax="978px"
            offset="113px"
            text="Находятся на амбулаторном лечении"
            v-space-p:left="'63px'"
            v-space-m:bottom="'67px'"
          />

          <board-numbers
            value="5 370"
            color="positive"
            size="lg"
            showDynamic
            :dynamic="true"
            arrowOffset="0"
          />
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
