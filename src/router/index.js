import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// import Vue from "vue";
// import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import AccountPage from "../components/AccountPage.vue";
// import Login from "../components/Login";
// import About from "../views/About.vue";
// import DashboardHome from "../components/DashboardHome.vue";
// import register from "../components/register";
// Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/AccountPage",
//     name: "AccountPage",
//     component: AccountPage,
//   },

//   {
//     path: "/About",
//     name: "About",
//     component: About,
//   },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     component: DashboardHome,
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: Login,
//   },
//   {
//     path: "/register",
//     name: "Register",
//     component: register,
//   },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;
