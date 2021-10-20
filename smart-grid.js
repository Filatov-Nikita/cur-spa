var smartgrid = require("smart-grid");

var settings = {
  outputStyle: "scss",
  breakPoints: {
    _4K: {
      width: "3840"
    },
    fHD: {
      width: "3839"
    }
  }
};

smartgrid("./src/css", settings);
