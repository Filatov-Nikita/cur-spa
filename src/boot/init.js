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
  el.style[`margin-${binding.arg}`] = binding.value;
});

Vue.directive("space-p", function(el, binding, vnode) {
  el.style[`padding-${binding.arg}`] = binding.value;
});
