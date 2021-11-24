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
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  methods: {
    async getData(){
      try{
        await this.$store.dispatch("activeMetting");
        this.$q.loading.hide()

      }
      catch {
        console.log('erorr')
      } 
  }
  },
    computed: {
    ...mapGetters({
      slideData: "slideDataGetter"
    }),
    },
  created(){
    console.log(this.$route.query)
    if(this.slideData === null){

      this.$q.loading.show()
      this.getData()
    }
  }
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
