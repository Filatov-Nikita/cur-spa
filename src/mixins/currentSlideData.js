import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
      slideData: "slideDataGetter"
    }),
    type(){
      if(this.slideData){

        const slides =  this.slideData.presentations.find(item=>{
            return item.type == this.$route.params.type
               
          }).slides
          
          return slides[this.$route.params.currentSlide-1].data
      }
      // return this.slideData.presentations[this.$route.params.type].data.find(item=>item.id==this.$route.params.currentSlide)
    },
    images(){
      return this.slideData.presentations.find(item=>{
            return item.type == this.$route.params.type
               
          }).slides[this.$route.params.currentSlide-1].images
    }
  }
}