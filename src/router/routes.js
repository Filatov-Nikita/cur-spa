const routes = [
  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/Index.vue"),
        name: "home"
      },
      {
        path: "/introduction",
        component: () => import("pages/Introduction.vue"),
        name: "introduction",
      }
    ]
  },
  {
    path: "/speaker",
    component: () => import("pages/Speaker.vue"),
    name: "speaker"
  },
  {
    path: "/presentation/:id/:type/:currentSlide",
    component: () => import("pages/Presentation.vue"),
    name: "presentation",
    props: route => {
      const { currentSlide, type } = route.params;
      return { currentSlide: parseInt(currentSlide), type };
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
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
