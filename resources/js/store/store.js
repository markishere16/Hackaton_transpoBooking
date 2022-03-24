import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import CurrentUser from './modules/user'
import drivers from './modules/drivers'

export default new Vuex.Store({
    modules: {
        CurrentUser,
        drivers
    },
})