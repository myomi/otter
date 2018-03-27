import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  mutations: {
    updateVersion(state, newValue) {
      state.version = newValue;
    }
  },
  modules: {
    profile: profile
  }
});
