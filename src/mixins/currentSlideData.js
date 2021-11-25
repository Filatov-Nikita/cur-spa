import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
      slideData: "slideDataGetter"
    }),
    type(){
      if(this.slideData){

        const slides =  this.slideData.presentations.find(item=>{
            return item.id == this.$route.params.id
               
          }).slides
          if(this.$route.params.currentSlide-1 !== -1){
            return slides[this.$route.params.currentSlide-1].data

          }
      }
      return null
      // return this.slideData.presentations[this.$route.params.type].data.find(item=>item.id==this.$route.params.currentSlide)
    },
    images(){
      if(this.$route.params.currentSlide-1 !== -1){
      const imagesArray =  this.slideData.presentations.find(item=>{
            return item.type == this.$route.params.type
               
          }).slides[this.$route.params.currentSlide-1].images
        return imagesArray ? imagesArray : []
      }
      
    }

  },
  created(){
    
  },
  mounted(){

  },
  beforeRouteEnter(to,from,next){

  }
}