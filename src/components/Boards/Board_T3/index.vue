
<template>
  <board-cover v-if="type">
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
  mixins: [currentSlideData],
  
  computed:{
    vitals(){
      return [
        {
          label: this.type.titleLine1,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: this.type.leftValueLine1 },
            right: { color: 'white', size: 'xs', value: `${this.type.rightValueLine1}%` },
          },
        },
        {
          label: this.type.titleLine2,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: this.type.leftValueLine2 },
            right: { color: 'white', size: 'xs', value: `${this.type.rightValueLine2}%` },
          },
        },
        {
          label: this.type.titleLine3,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: this.type.leftValueLine3 },
            right: { color: 'white', size: 'xs', value: `${this.type.rightValueLine3}%` },
          },
        },
        {
          label: this.type.titleLine4,
          spaceOffset: '60px',
          options: {
            left: { color: 'negative', size: 'sm', value: this.type.leftValueLine4 },
            right: { color: 'white', size: 'xs', value: `${this.type.rightValueLine4}%` },
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