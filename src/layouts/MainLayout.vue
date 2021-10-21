<template>
  <q-layout class="container" :class="{ open }">
    <q-page-container>
      <MainVideoBackground src="videos/main.mp4" />
      <q-page class="tw-flex tw-flex-col">
        <div class="tw-flex-grow">
          <MainHeader :class="open ? ['tw-z-50', 'tw-relative'] : ''" />
          <MainMenuItems
            @close="open = false"
            class="menu-paddings"
            v-if="open"
          />
          <transition
            leave-active-class="leave"
            enter-active-class="animated fadeIn slow-enter1"
          >
            <router-view class="main-wrapper" />
          </transition>
        </div>
        <BottomMenu class="bottom-menu" @toggleDoklad="toggleMenu" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import BottomMenu from 'components/Common/BottomMenu';
import MainMenuItems from 'components/Main/MenuItems/MainMenuItems';
import MainVideoBackground from 'components/Main/MainVideoBackground';
import MainHeader from 'layouts/parts/MainHeader';

export default {
  name: 'MainLayout',
  data() {
    return {
      open: this.$route.query.open || false,
    };
  },
  methods: {
    toggleMenu() {
      if (this.$route.name === 'home')
        return this.$router.push({ name: 'introduction' });
      this.open = !this.open;
    },
  },
  components: {
    MainHeader,
    BottomMenu,
    MainMenuItems,
    MainVideoBackground,
  },
};
</script>
<style lang="scss" scoped>
//$
.container {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.open::after {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(4, 16, 61, 0.92);
  backdrop-filter: blur(42px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.slow-enter1 {
  animation-duration: 1.5s;
}

.leave {
  display: none;
}

.bottom-menu {
  position: absolute;
  bottom: -1px;
  left: convertValues(141px);
}

.menu-paddings {
  padding-left: convertValues(161px);
  padding-top: convertValues(391px);
}
</style>
