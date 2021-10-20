import Vue from "vue";
import * as moment from "moment";
import "moment/locale/ru";
import VueMasonry from "vue-masonry-css";

Vue.use(VueMasonry);

moment.locale("ru");

Vue.component(
  "BoardCover",
  require("src/components/Boards/Helpers/BoardCover").default
);
Vue.component(
  "BoardDevider",
  require("src/components/Boards/Helpers/BoardDevider").default
);
Vue.component(
  "BoardSeparator",
  require("src/components/Boards/Helpers/BoardSeparator").default
);
Vue.component(
  "BoardNumbers",
  require("src/components/Boards/Helpers/BoardNumbers").default
);
Vue.component(
  "BoardMappingNumbers",
  require("src/components/Boards/Helpers/BoardMappingNumbers").default
);
Vue.component(
  "BoardPeriodNumbers",
  require("src/components/Boards/Helpers/BoardPeriodNumbers").default
);
Vue.component(
  "BoardTextBody",
  require("src/components/Boards/Helpers/BoardTextBody").default
);
Vue.component(
  "BoardCaption",
  require("src/components/Boards/Helpers/BoardCaption").default
);

Vue.component(
  "BoardOffsets",
  require("src/components/Boards/Helpers/BoardOffsets").default
);

Vue.component(
  "BoardVitals",
  require("src/components/Boards/Helpers/BoardVitals").default
);

Vue.directive("space-m", function(el, binding, vnode) {
  
  el.style[`margin-${binding.arg}`] = Vue.prototype.$toRem(binding.value); 
});

Vue.directive("space-p", function(el, binding, vnode) {
  
  el.style[`padding-${binding.arg}`] = Vue.prototype.$toRem(binding.value); 
});


Vue.prototype.$formatNumber = function(data,tail='px', lgFactor=0.44, xlFactor=1, smFactor=0.375 ){
      let number =  String(data).match(/.\d*/g)[0];
      let screen = Screen.lt;
      
      if(/px/.test(data) || /%/.test(data)){
        if(/px/.test(data)){
          return screen.sm?number*smFactor+'px':screen.lg?number*lgFactor+'px':screen.xl?number*xlFactor+'px':data;
        }
        return data;
      }
      return screen.sm?data*smFactor+tail:screen.lg?data*lgFactor+tail:screen.xl?data*xlFactor+tail:data+tail;
}

Vue.prototype.$toRem=function(data){
  let number =  String(data).match(/.\d*/g)[0];
        if(/px/.test(data) || /%/.test(data)){
        if(/px/.test(data)){
          console.log(number/16+'rem')
          return number/16+'rem';
        }
        return data;
      }
    return data/16+'rem'      
}
