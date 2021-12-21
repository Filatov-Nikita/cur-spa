import { hasAuth } from "src/router/utilities/auth";
// import { getAccessToken } from "src/utilities/tokens";

function getAccessToken() {
  let isAuth = localStorage.getItem("auth");
  return isAuth === "true";
}

export default ({ router, store }) => {
  if (getAccessToken()) {
    store.commit("auth/setAuth", true);
  }

  router.beforeEach((to, from, next) => {
    if (!hasAuth(to)) return next();
    if (getAccessToken()) return next();
    return next({ name: "auth.login", replace: true });
  });
};
