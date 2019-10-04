import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Register
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import(/* webpackChunkName: "list" */ './views/List.vue')
    },
    {
      path: '/privacidade',
      name: 'privacidade',
      component: () => import(/* webpackChunkName: "privacy" */ './views/Privacy.vue')
    },
    {
      path: '/como-ajudar',
      name: 'como-ajudar',
      component: () => import(/* webpackChunkName: "helper" */ './views/Helper.vue')
    },
    {
      path: '/perguntas',
      name: 'perguntas',
      component: () => import(/* webpackChunkName: "questions" */ './views/Questions.vue')
    },
    {
      path: '/ativar/:code',
      name: 'ativar',
      component: () => import(/* webpackChunkName: "active" */ './views/Active.vue')
    },
    {
      path: '/perfil/:id',
      name: 'perfil',
      component: () => import(/* webpackChunkName: "perfil" */ './views/Perfil.vue')
    }
  ]
})
