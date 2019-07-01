import Vue from "vue";
import Vuex from "vuex";
import playerData from './modules/playerData'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    playerData
  }
});
