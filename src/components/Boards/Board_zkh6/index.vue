<template>
  <board-cover>
    <board-devider leftWidth="69%" rightWidth="31%">
      <template #left>
        <board-offsets :b="390" :l="156" :r="184" :t="109">
          <board-text-body
            offset="88px"
            icon="trassa"
            text="Произведен обкос улиц, км"
            v-space-m:bottom="'35px'"
          />
          <board-numbers
            value="20 585"
            color="negative"
            size="lg"
            showDynamic
            dynamic
            v-space-m:bottom="'143px'"
          />
          <board-separator />
        </board-offsets>
      </template>
      <template #right>
        <board-offsets :b="154" :l="136" :r="220" :t="179">
          <board-offsets>
            <board-text-body
              textWMax="349px"
              icon="dvor"
              offset="89px"
              text="Произведен обкос дворов, км"
              sizeText="caption"
              v-space-m:bottom="'39px'"
            />
            <board-numbers
              value="7 543"
              color="positive"
              size="sm"
              showDynamic
              dynamic
              v-space-m:bottom="'333px'"
            />

            <board-text-body
              textWMax="409px"
              icon="obochina"
              offset="89px"
              text="Произведен обкос обочин дорог, км"
              sizeText="caption"
              v-space-m:bottom="'39px'"
            />
            <board-numbers
              value="11 000"
              color="positive"
              size="sm"
              showDynamic
              dynamic
            />
          </board-offsets>
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
