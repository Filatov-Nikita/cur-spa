<template>
  <board-cover>
    <board-offsets :l="188" :t="241" :b="488" :r="272">
      <board-vitals :vitals="vitals" vitalType="mapping" align="end">
        <template v-slot:label="{ label }">
          <div
            class="board-li-el slide-text-body tw-align-middle"
            :style="{'margin-bottom': $toRem('60px')}"
          >
            {{ label }}
          </div>
        </template>
      </board-vitals>
    </board-offsets>
  </board-cover>
</template>

<script>
import currentSlideData from "src/mixins/currentSlideData"
export default {
  // data() {
  //   return {
  //     vitals: [
  //       {
  //         label: 'Выезд на встречную полосу',
  //         spaceOffset: '60px',
  //         options: {
  //           left: { color: 'negative', size: 'sm', value: '10' },
  //           right: { color: 'white', size: 'xs', value: '80%' },
  //         },
  //       },

  //       {
  //         label: 'Наезд на пешехода',
  //         spaceOffset: '60px',
  //         options: {
  //           left: { color: 'negative', size: 'sm', value: '1' },
  //           right: { color: 'white', size: 'xs', value: '80%' },
  //         },
  //       },
  //     ],
  //   };
  // },
  

  mixins: [currentSlideData],
  computed: {
    vitals(){
      const {type} = this
      return [
        {
          label: type.text1,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: type.valueLeftSide1},
            right: { color: 'white', size: 'xs', value: `${type.valueRightSide1}` },
          },
        },
        {
          label: type.text2,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: type.valueLeftSide2},
            right: { color: 'white', size: 'xs', value: `${type.valueRightSide2}` },
          },
        },
        {
          label: type.text3,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: type.valueLeftSide3},
            right: { color: 'white', size: 'xs', value: `${type.valueRightSide3}` },
          },
        },
        {
          label: type.text4,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: type.valueLeftSide4},
            right: { color: 'white', size: 'xs', value: `${type.valueRightSide4}` },
          },
        },
      ]
    }
  }

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
