import axios from 'axios'

const state = {
    drivers: [],

};
const getters = {
    get_drivers: (state) => state.drivers,


};
const actions = {

    async fetchAllDriver({ commit }) {
        await axios.get(`/api/users/all/` + 'Driver')
            .then((res) => {
                commit('FETCH_DRIVER', res.data);
            })
            .catch((err) => {
                console.error('something went wrong');
            })
    },


};
const mutations = {
    FETCH_DRIVER: (state, drivers) => (state.drivers = drivers),

};

export default {
    state,
    getters,
    actions,
    mutations
};