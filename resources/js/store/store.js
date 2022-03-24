import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import CurrentUser from './modules/user'

export default new Vuex.Store({
    modules: {
        CurrentUser
    },
})