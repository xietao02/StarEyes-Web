import { createRouter, createWebHistory } from "vue-router";
import request from "../request";
import { getToken, getID, user } from "../common/localStorage";

const routes = [
  {
    path: "/",
    name: "redirect",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "首页 - StarEyes",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "登录 - StarEyes",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/overview",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      title: "控制台 - StarEyes",
      requiresAuth: true,
    },
    children: [
      {
        path: "overview",
        component: () => import("../views/Overview.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "monitors",
        component: () => import("../views/MonitorsManagement.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "events",
        component: () => import("../views/Events.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "servers",
        component: () => import("../views/ServersManagement.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "personal_info",
        component: () => import("../views/PersonalInformation.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "about",
        component: () => import("../views/About.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "404 - StarEyes",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  console.log("to: " + to.path);
  if (to.meta.requiresAuth == true) {
    console.log("requiresAuth: true!!!");
    if (getToken()) {
      console.log("user.id: " + getID());
      // 有token, 交给后端进行验证
      request.post("/api/auth/verify", user).then((res) => {
        if (res == true) {
          next();
        } else {
          next({
            path: "/login",
          });
        }
      });
    } else {
      ElNotification({
        type: "warning",
        message: "登录会话已过期，请重新登录!",
      });
      next({
        path: "/login",
      });
    }
  } else {
    console.log("requiresAuth: false!!!");
    next();
  }
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
