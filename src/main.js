// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './vuex/store'
import VueRouter from 'vue-router'

import Main from './components/Main'
import Blog from './components/Blog'
import WriteBlog from './components/WriteBlog'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/blog/:id',
    component: Blog
  },
  {
    path: '/blogs/writeBlog',
    component: WriteBlog
  }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  store,
  template: '<App/>',
  components: {App},
  router: router,
}).$mount('#app');
