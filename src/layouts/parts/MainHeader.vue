<template>
  <div class="header main-wrapper tw-flex">
    <router-link to="/">
      <img src="~assets/logo.svg" alt="" class="logo" />
    </router-link>
    <img src="~assets/bash-logo.svg" alt="" />
    <DateTimeBar class="timebar" />
  </div>
</template>

<script>
import DateTimeBar from 'components/Common/DateTimeBar';

export default {
  name: 'MainHeader',
  components: {
    DateTimeBar,
  },
};
</script>

<style scoped>
.logo {
  margin-right: 230px;
}

.header {
  padding-top: 116px;
  background: transparent;
}

.timebar {
  position: absolute;
  top: 83px;
  right: 83px;
  z-index: 1;
}
</style>
