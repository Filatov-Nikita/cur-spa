<template>
  <div class="header main-wrapper tw-flex">
    <router-link to="/">
      <img src="~assets/logo.svg" alt=""  class="logo" />
    </router-link>
    <img src="~assets/bash-logo.svg" class="logo2" alt="" />
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

<style lang="scss" scoped>
//$
.logo {
  height: convertValues(271px);
  width: convertValues(715px);
  margin-right: convertValues(230px);
}
.logo2 {
  width: convertValues(760px);
  height: convertValues(294px);
}

.header {
  padding-top: convertValues(116px);
  background: transparent;
}

.timebar {
  position: absolute;
  top: convertValues(83px);
  right: convertValues(83px);
  z-index: 1;
}
</style>
