<template>
  <q-layout class="container" :class="{ open }">
    <q-page-container v-if="$route.name=='first'" class="bg" style="background: url(./images/main-map.jpg);background-size: cover;background-repeat: no-repeat;">
      <DateTimeBar class="timebar" />
                <transition
            leave-active-class="leave"
            enter-active-class="animated fadeIn slow-enter1"
          >
            <router-view class="main-wrapper" />
          </transition>
    </q-page-container>
    <q-page-container v-else>
      <MainVideoBackground src="videos/main.mp4" />
      <q-page class="tw-flex tw-flex-col tw-overflow-auto">
        <div class="tw-flex-grow">
          <MainHeader :class="open ? ['tw-z-50', 'tw-relative'] : ''" />
          <MainMenuItems
            @close="close"
            class="menu-paddings items"
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
import DateTimeBar from 'components/Common/DateTimeBar';
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
      if (this.$route.name === 'home'){

        this.open = !this.open;
        return this.$router.push({ name: 'introduction' });
      }
    },
    close(){
      this.open = false
      this.$router.push({ name: 'home' });
    }
  },
  created(){
    if(this.$route.name === 'introduction')this.open = true
  },
  mounted() {

  },
  components: {
    MainHeader,
    BottomMenu,
    MainMenuItems,
    MainVideoBackground,
    DateTimeBar
  },
};
</script>
<style lang="scss" scoped>
//$
.bg{
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
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
  padding-right: convertValues(161px);
  padding-top: convertValues(391px);
}
.timebar {
  position: absolute;
  top: convertValues(83px);
  right: convertValues(83px);
  z-index: 1;
}
</style>
