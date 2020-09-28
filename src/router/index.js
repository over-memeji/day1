import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import Demo from '../views/Demo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/one',
        name: 'One',
      
        component: () => import('../views/One.vue')
      },
      {
        path: '/two',
        name: 'Two',
      
        component: () => import('../views/Two.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
  
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
  
    component: () => import('../views/Login.vue')
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 router.beforeEach((to,from,next)=>{
  var log = localStorage.getItem('token')
  if(to.name=='Login'){
    next()
  }else{
    if(log){
      next()
    }else{
      next('/login')
    }
  }
}) 
export default router
