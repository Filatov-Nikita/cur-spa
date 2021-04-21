<template>
  <div class="tw-flex">
    <PresentationBottomBarArrow
      ref="left"
      position="left"
      @click="$emit('prev')"
    />
    <PresentationBottomBarArrow
      ref="right"
      position="right"
      @click="$emit('next')"
    />
  </div>
</template>

<script>
import PresentationBottomBarArrow from './PresentationBottomBarArrow';

let keyup;
let keydown;

function removeListeners() {
  document.removeEventListener('keyup', keyup);
  document.removeEventListener('keydown', keydown);
}

function addListeners() {}

export default {
  activated() {
    keydown = (e) => {
      if (e.keyCode === 37) {
        const el = this.$refs.left.$el;
        return el.classList.add('arrow-active');
      }
      if (e.keyCode === 39) {
        const el = this.$refs.right.$el;
        return el.classList.add('arrow-active');
      }
    };

    keyup = (e) => {
      if (e.keyCode === 37) {
        const el = this.$refs.left.$el;
        el.classList.toggle('arrow-active');
        return this.$emit('prev');
      }
      if (e.keyCode === 39) {
        const el = this.$refs.right.$el;
        el.classList.toggle('arrow-active');
        return this.$emit('next');
      }
    };

    document.addEventListener('keyup', keyup);
    document.addEventListener('keydown', keydown);
  },
  destroyed() {
    removeListeners();
  },
  deactivated() {
    removeListeners();
  },
  components: {
    PresentationBottomBarArrow,
  },
};
</script>

<style>
</style>
