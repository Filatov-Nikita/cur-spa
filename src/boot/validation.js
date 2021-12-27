import { extend, localize } from "vee-validate";

import ru from "vee-validate/dist/locale/ru";
import * as rules from "vee-validate/dist/rules";

localize("ru", ru);

const needRules = ["email", "required"];

needRules.forEach(rule => {
  extend(rule, rules[rule]);
});
