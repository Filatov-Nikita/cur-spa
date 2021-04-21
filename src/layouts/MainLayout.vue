<template>
  <q-layout class="container">
    <q-page-container>
      <q-page class="tw-flex tw-flex-col">
        <div class="tw-flex-grow main-bg">
          <MainHeader />
          <transition
            leave-active-class="leave"
            enter-active-class="animated fadeIn slow-enter1"
          >
            <router-view class="main-wrapper" />
          </transition>
        </div>
        <MainLinks />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import MainLinks from 'components/Main/MainLinks';
import MainHeader from 'layouts/parts/MainHeader';

export default {
  name: 'MainLayout',
  components: {
    MainLinks,
    MainHeader,
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.slow-enter1 {
  animation-duration: 1.5s;
}

.leave {
  display: none;
}
</style>
