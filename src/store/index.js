import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robots';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    robots: robotsModule,
  },
});
