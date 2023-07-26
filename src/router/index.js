import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '*', //通配符
    redirect: '/film/nowplaying'  //如果没有输入未定义的路径，会自动跳转到/film
  },
  {
    path: '/film',
    redirect: '/film/nowplaying',
    // 路由懒加载
    component: () => import('../views/Film'),
    children: [
      {
        path: 'nowplaying',
        component: () => import('../views/film/nowplaying')
      },
      {
        path: 'comingsoon',
        component: () => import('../views/film/comingsoon')
      }
    ]
  },
  {
    path: '/cinema',
    component: () => import('../views/Cinema')
  },
  {
    path: '/cinema/search',
    component: () => import('../views/Search')
  },
  {
    path: '/city',
    component: () => import('../views/City')
  },
  {
    path: '/login',
    component: () => import('../views/Login')
  },
  {
    path: '/detail',
    component: () => import('../views/Detail')
  }
]

export default new VueRouter({
  routes,
  mode: 'hash'
})