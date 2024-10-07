import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () =>
        import(/** webpackChunkName:"home" */ "../views/bt1/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/** webpackChunkName:"about" */ "../views/bt1/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/** webpackChunkName:"contact" */ "../views/bt1/Contact.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () =>
        import(/** webpackChunkName:"search" */ "../views/Search.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () =>
        import(/** webpackChunkName:"notFound" */ "../views/NotFound.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import(
          /** webpackChunkName:"dashboard" */ "../views/bt5/Dashboard.vue"
        ),
    },
    {
      path: "/logon",
      name: "logon",
      component: () =>
        import(/** webpackChunkName:"logon" */ "../views/bt5/Logon.vue"),
    },
    {
      path: "/listPost",
      name: "listPost",
      component: () =>
        import(/** webpackChunkName:"listPost" */ "../views/bt7/ListPost.vue"),
    },
    {
      path: "/postDetail",
      name: "postDetail",
      component: () =>
        import(
          /** webpackChunkName:"postDetail" */ "../views/bt7/PostDetail.vue"
        ),
    },
    {
      path: "/listProduct",
      name: "listProduct",
      component: () =>
        import(
          /** webpackChunkName:"listProduct" */ "../views/bt8/ListProduct.vue"
        ),
    },
    {
      path: "/settings",
      name: "settings",
      component: () =>
        import(/** webpackChunkName:"settings" */ "../views/bt9/Settings.vue"),
    },
    {
      path: "/product-detail/:id",
      component: () =>
        import(
          /** webpackChunkName:"listProduct" */ "../views/bt8/ProductDetail.vue"
        ),
    },
    {
      path: "/admin",
      name: "user",
      component: () =>
        import(/** webpackChunkName:"user" */ "../views/bt6/User.vue"),
      children: [
        {
          path: "/about",
          name: "about",
          component: () =>
            import(/** webpackChunkName:"about" */ "../views/bt6/About.vue"),
        },
        {
          path: "/setting",
          name: "setting",
          component: () =>
            import(
              /** webpackChunkName:"setting" */ "../views/bt6/Setting.vue"
            ),
        },
      ],
    },
  ],
});
// router.beforeEach((to, from, next) => {
//   const isLogin = true;
//   if (isLogin) {
//     next("/dashboard");
//   } else {
//     next("/logon");
//   }
// });
router.afterEach((to) => {
  console.log("Current URL:", to.fullPath);

  localStorage.setItem("lastVisitedUrl", to.fullPath);
});
export default router
