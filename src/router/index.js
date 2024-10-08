import { createRouter, createWebHistory } from 'vue-router'
// import isAdmin from '@/middlewares/isAdmin'

import DefaultLayout from '@/layouts/DefaultLayout.vue';
// import UserLayout from '@/layouts/UserLayout.vue';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: ()=>import(`@/pages/LandingPage`),
      },
      {
        path: '/practices',
        name: 'practices',
        component: ()=>import(`@/pages/PracticesPage`),
      },
      {
        path: '/reviews',
        name: 'reviews',
        component: ()=>import(`@/pages/ReviewsPage`),
      },
      {
        path: '/pricing',
        name: 'pricing',
        component: ()=>import(`@/pages/PricingPage`),
      },
      {
        path: '/contact-us',
        name: 'contact-us',
        component: ()=>import(`@/pages/ContactUs`),
      },
      {
        path: '/practices',
        name: 'practices',
        component: ()=>import(`@/pages/PracticesPage`),
      },
      {
        path: '/editorials',
        name: 'editorials',
        component: ()=>import(`@/pages/EditorialsPage`),
      },
      {
        path: '/editorial/:id',
        name: 'editorial-post',
        component: ()=>import(`@/pages/EditorialPost`),
      },
      {
        path: '/register',
        name: 'register',
        component: ()=>import(`@/pages/RegistrationPage`),
      },
      {
        path: '/login',
        name: 'login',
        component: ()=>import(`@/pages/LoginPage`),
      },
      {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ()=>import(`@/pages/ForgotPassword`),
      },
    ], 
  },
  // {
  //   path: '/user',
  //   component: UserLayout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'AdminDashboard',
  //       component: UserLayout,
  //     },
  //   ],
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   redirect: {name: 'adminDashboard'},
  //   component: ()=>import(`@/pages/admin/AdminPage`),
  //   beforeEnter: isAdmin,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       name: 'adminDashboard',
  //       component: ()=>import(`@/pages/admin/dashboard/AdminDashboard`),
  //       beforeEnter: isAdmin
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
