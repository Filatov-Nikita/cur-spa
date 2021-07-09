<template>
  <div class="menu">
    <BottomLink
      :flat="flat"
      style="flex-basis: 755px"
      icon="cur-home"
      label="Домашняя страница ЦУР"
      @click="openCUR"
    />
    <BottomLink
      :flat="flat"
      style="flex-basis: 569px"
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
      window.open('http://cur-rb.ru', '_blank');
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

<style scoped>
.menu {
  display: flex;
  width: 100%;
  max-width: 1350px;
}
</style>
