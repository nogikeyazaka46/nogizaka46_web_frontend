/**
 * Created by RadAsm on 17/1/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import {blogs} from './blogs/blogs';
import {comments} from './comments/comments';

import {getters} from './getters';
import {actions} from './actions';
import {mutations} from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    blogs,
    comments,
  },
  strict: debug,
  //plugins: debug ? [createLogger()] : []
})


