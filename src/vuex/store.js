/**
 * Created by RadAsm on 17/2/4.
 */
"use strict";
import Vue from 'vue'
import Vuex from 'vuex'

import {states} from './states'
import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: states,
  getters: getters,
  mutations: mutations,
  actions: actions,
});

export {store};
