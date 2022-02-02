<template>
  <div id="apps" class="tw-flex tw-justify-center tw-flex-col tw-items-center tw-m-auto tw-h-screen">
    <img src="~assets/subtract.svg" alt=""  class="logo" />
    <div class="title">
      Просим отключить средства <br>
мобильной связи

    </div>

  </div>
    <!-- content -->
  
</template>

<script>
export default {
  // name: 'PageName',
  methods: {
    callEvent() {
      this.$router.push({name:'home'})
    }
  },
  mounted() {
    window.addEventListener('keyup', event => {
        this.callEvent()
    })

    window.addEventListener('click', event => {
        this.callEvent()
    })
  }
}
</script>

<style lang="scss" scoped>
//$
.logo {
  height: convertValues(387px);
  width: convertValues(387px);
  
}
.title {
  font-size: convertValues(120px);
  line-height: convertValues(134.02px);
  margin-top: convertValues(126px);
  font-weight: 700;
  text-align: center;
}
</style>
