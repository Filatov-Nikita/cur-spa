import { markAuth, markRoute } from "./utilities/auth";

const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: markAuth(
      {
        path: "/",
        component: () => import("pages/First.vue"),
        name: "first"
      },
      {
        path: "/home",
        component: () => import("pages/Index.vue"),
        name: "home"
      },
      {
        path: "/introduction",
        component: () => import("pages/Introduction.vue"),
        name: "introduction"
      }
    )
  },

  markRoute({
    path: "/speaker",
    component: () => import("pages/Speaker.vue"),
    name: "speaker"
  }),

  markRoute({
    path: "/presentation/:id/:type/:currentSlide",
    component: () => import("pages/Presentation.vue"),
    name: "presentation",
    props: route => {
      const { currentSlide, type, id } = route.params;
      return { currentSlide: parseInt(currentSlide), type, id: parseInt(id) };
    },
    beforeEnter(to, from, next) {
      let { currentSlide } = to.params;
      currentSlide = parseInt(currentSlide);
      if (isNaN(currentSlide)) {
        return next({ ...to, params: { ...to.params, currentSlide: 0 } });
      }
      if (currentSlide < 0) {
        return next({ ...to, params: { ...to.params, currentSlide: 0 } });
      }
      next();
    }
  }),

  {
    path: "/auth",
    component: () => import("src/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("src/pages/Auth/AuthLogin.vue"),
        name: "auth.login"
      },
      {
        path: "/confirm-email",
        component: () => import("src/pages/Auth/AuthConfirmEmail.vue"),
        name: "auth.confirm-email"
      },
      {
        path: "/reset-password",
        component: () => import("src/pages/Auth/AuthResetPassword.vue"),
        name: "auth.reset-password"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
