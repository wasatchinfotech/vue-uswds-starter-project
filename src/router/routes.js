
function requireAuth(to, from, next) {
  const isUserLoggedIn = !!localStorage.getItem("isUserValid");

  if (!isUserLoggedIn) {
    next({
      path: "/auth",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: '', component: () => import('../views/Home.vue') },
      { path: 'about', component: () => import('../views/About.vue') }
    ]
  },
  {
    path: "/auth",
    component: () => import("../layouts/NoLayout.vue"),
    children: [
      { path: '', component: () => import("../modules/auth/Signin.vue") },
      {
        path: 'signout',
        component: () => import("../modules/auth/Signout.vue")
      },
      { path: 'forgot-password', component: () => import('../modules/auth/ForgotPassword.vue') },
      { path: 'register', component: () => import('../modules/auth/Register.vue') },
      { path: 'forgot-username', component: () => import('../modules/auth/ForgotUsername.vue') },
      { path: 'reset-password', component: () => import('../modules/auth/ResetPassword.vue') }
    ]
  },
  {
    path: "/dashboard",
    component: () => import("../layouts/DocLayout.vue"),
    children: [
      { path: '', component: () => import('../modules/dashboard/Dashboard.vue'), beforeEnter: requireAuth },
      { path: 'profile', component: () => import('../modules/dashboard/Profile.vue'), beforeEnter: requireAuth },
      { path: 'settings', component: () => import('../modules/dashboard/Settings.vue'), beforeEnter: requireAuth }
    ]
  },
  {
    path: "*",
    component: () => import("../layouts/NoLayout.vue"),
    children: [
      { path: '', component: () => import('../views/Error404.vue') }
    ]
  }
];

export default routes;
