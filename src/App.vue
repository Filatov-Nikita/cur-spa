<template>
  <div id="q-app" class="bg">
    <transition
      enter-active-class="animated fadeIn slow-enter"
      leave-active-class="animated fadeOut slow-leave"
      appear
    >
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style scoped>
.bg {
  background: #00092e;
  position: relative;
  z-index: 0;
}

.slow-enter {
  animation-duration: 1.5s;
}

.slow-leave {
  animation-duration: 0.1s;
}
</style>
