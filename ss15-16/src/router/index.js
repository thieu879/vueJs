import Home from "@/components/bt1/Home.vue";
import ListEmployee from "@/components/bt10/ListEmployee.vue";
import Contact from "@/components/bt2/Contact.vue";
import Register from "@/components/bt3/Register.vue";
import Login from "@/components/bt4/Login.vue";
import NotFound from "@/components/bt5/NotFound.vue";
import Bt6 from "@/components/bt6/Bt6.vue";
import Bt7 from "@/components/bt7/Bt7.vue";
import Detail from "@/components/bt7/Detail.vue";
import Product from "@/components/bt7/Product.vue";
import Account from "@/components/bt8/Account.vue";
import Bt8 from "@/components/bt8/Bt8.vue";
import Dashboard from "@/components/bt8/Dashboard.vue";
import ListUser from "@/components/bt9/ListUser.vue";
import UserDetail from "@/components/bt9/UserDetail.vue";
import EmployeesDetail from "@/components/bt10/EmployeesDetail.vue";
import { createRouter, createWebHistory } from "vue-router";
import Profile from "@/components/bt10/Profile.vue";
import Project from "@/components/bt10/Project.vue";
import Contact1 from "@/components/bt10/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/bt6",
    name: "bt6",
    component: Bt6,
    children: [
      {
        path: "contact",
        component: Contact,
      },
      {
        path: "home",
        component: Home,
      },
    ],
  },
  {
    path: "/bt7",
    component: Bt7,
    children: [
      {
        path: "detail",
        component: Detail,
      },
      {
        path: "home",
        component: Home,
      },
      {
        path: "product",
        component: Product,
      },
    ],
  },
  {
    path: "/bt9",
    component: ListUser,
  },
  {
    path: "/userDetail/:id",
    component: UserDetail,
    props: true,
  },
  {
    path: "/bt8",
    component: Bt8,
    children: [
      {
        path: "account",
        component: Account,
      },
      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "product",
        component: Product,
      },
    ],
  },
  { path: "/employees", component: ListEmployee },
  {
    path: "/employees/:id",
    component: EmployeesDetail,
    children: [
      { path: "profile", component: Profile },
      { path: "projects", component: Project },
      { path: "contact", component: Contact1 },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
