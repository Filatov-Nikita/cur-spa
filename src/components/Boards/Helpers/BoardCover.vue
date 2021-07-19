<template>
  <div class="cover">
    <slot />
    <div class="corners">
      <div class="corners-bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardCover'
}
</script>


<style scoped>
.cover {
  background: rgba(0, 7, 47, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid var(--board-border-color);
  position: relative;
  /* max-width: 3264px; */
  min-height: 1450px;
}

.corners::after,
.corners::before,
.corners-bottom::after,
.corners-bottom::before {
  content: '';
  display: block;
  width: 47px;
  height: 47px;
  background: url('~assets/board-corner.svg');
  position: absolute;
}

.corners::after {
  left: -5px;
  top: -1px;
}
.corners::before {
  right: -1px;
  top: -5px;
  transform: rotate(90deg);
}

.corners-bottom::after {
  left: -1px;
  bottom: -5px;
  transform: rotate(270deg);
}
.corners-bottom::before {
  right: -5px;
  bottom: -1px;
  transform: rotate(180deg);
}
.corners {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
