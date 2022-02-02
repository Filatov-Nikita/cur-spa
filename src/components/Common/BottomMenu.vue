<template>
  <div class="menu">
    <BottomLink
      :flat="flat"
      :style="{'flex-basis': $toRem('755px')}"
      icon="cur-home"
      label="Домашняя страница ЦУР"
      @click="openCUR"
    />
    <BottomLink
      :flat="flat"
      :style="{'flex-basis': $toRem('569px')}"
      icon="doclad"
      label="Выбрать доклад"
      @click="toggleMenu"
    />
  </div>
</template>

<script>
import BottomLink from './BottomLink';

export default {
  props: {
    flat: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    openCUR() {
      window.open('https://cur-3d.bashkortostan.ru', '_blank');
    },
    toggleMenu() {
      this.$emit('toggleDoklad');
    },
  },
  components: {
    BottomLink,
  },
};
</script>

<style lang="scss" scoped>
//$
.menu {
  display: flex;
  width: 100%;
  max-width: convertValues(1350px);
}
</style>
