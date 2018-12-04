import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from '../pages/home.vue';

import planets from '../pages/mainPlanets.vue';

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        home: home,
      },
    },
    {
      path: '*',
      component: home,
    },
    {
      path: '/planets',
      components: {
        planets: planets,
      },
    },
  ],
});
