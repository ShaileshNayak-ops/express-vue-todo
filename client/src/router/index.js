import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    component() {
      return import(/*webpackChunkName: "login"*/ "../views/Login.vue");
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component() {
      return import(/*webpackChunkName: "signin"*/ "../views/Signin.vue");
    },
  },
  {
    path: "/todo",
    name: "todo",
    component() {
      return import(/*webpackChunkName: "todo"*/ "../views/Todo.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
