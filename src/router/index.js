import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Help",
    name: "Help",
    component: Help
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
