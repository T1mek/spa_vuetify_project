import HomePage from "@/view/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import ProfilePage from "@/view/ProfilePage.vue";
import RegisterPage from "@/view/RegisterPage.vue";
import LoginPage from "@/view/LoginPage.vue";

const isAuthorized = localStorage.hasOwnProperty('token')

// const authGuard = function(to,from,next) {
//   if (!isAuthorized) {
//    next({
//      name: 'home'
//    })
//   }
//   else next()
// }


const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name: 'home',
      component: HomePage,
      // beforeEnter: authGuard
    },
    {
      path:'/profile',
      name:'profile',
      component: ProfilePage,
      // beforeEnter: authGuard
    },
    {
      path:'/register',
      name:'register',
      component: RegisterPage,
    },
    {
      path:'/login',
      name:'login',
      component: LoginPage,
    }

  ]
})


export default router