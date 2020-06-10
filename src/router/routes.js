/*
function requireAuth(to, from, next) {
  const isUserLoggedIn = !!localStorage.getItem("isAuthenticated");

  if (!isUserLoggedIn) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}
*/
const routes = [
  {
    path: "/signin",
    component: () => import("../layouts/NoLayout.vue"),
    children: [
      { path: "", component: () => import("../modules/auth/Signin.vue") },
      {
        path: "signout",
        component: () => import("../modules/auth/Signout.vue")
      }
      /*
      { path: 'forgot-password', component: () => import('modules/auth/ForgotPassword.vue') },
      { path: 'activate-account', component: () => import('modules/auth/ActivateAccount.vue') },
      { path: 'code-request', component: () => import('modules/auth/CodeRequest.vue') },
      { path: 'reset-password', component: () => import('modules/auth/ResetPassword.vue') }
      */
    ]
  },
  {
    path: "/dashboard",
    component: () => import("../layouts/NoLayout.vue"),
    children: [
      // { path: '', component: () => import('components/landing/dashboard.vue'), beforeEnter: requireAuth }
    ]
  }
];

if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("../views/Error404.vue")
  });
}

export default routes;
