import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
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
Vue.component("AppInput2", require("src/core/AppInput").default);
Vue.component("AppLink", require("src/core/AppLink").default);
Vue.component("AppCheckbox2", require("src/core/AppCheckbox").default);
Vue.component("AppButton2", require("src/core/AppButton").default);
