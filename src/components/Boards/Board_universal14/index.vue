<template>
  <board-cover>
    <board-offsets :l="188" :t="241" :b="488" :r="272">
      <board-vitals :vitals="vitals" vitalType="mapping" align="end">
        <template v-slot:label="{ label }">
          <div
            class="board-li-el slide-text-body tw-align-middle"
            style="margin-bottom: 60px"
          >
            {{ label }}
          </div>
        </template>
      </board-vitals>
    </board-offsets>
  </board-cover>
</template>

<script>
export default {
  data() {
    return {
      vitals: [
        {
          label: 'Выезд на встречную полосу',
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: '10' },
            right: { color: 'white', size: 'xs', value: '80%' },
          },
        },

        {
          label: 'Наезд на пешехода',
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: '1' },
            right: { color: 'white', size: 'xs', value: '80%' },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
//$
.board-li-el::before {
  width: convertValues(31px);
  height: convertValues(31px);
  margin-right: convertValues(71px);
  vertical-align: middle;
}
</style>
