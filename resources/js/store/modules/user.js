import axios from 'axios'

const state = {
    CurrentUser: [],
    UserRole: null,
    MyCourses: [],
    CurrentStatus: {
        exist: null,
        status: null
    },
    IsAuthenticated: window.localStorage.getItem('is_authenticated'),
    IsVerified: null,
    AccessToken: window.localStorage.getItem('personal_access_token'),
    isSuccess: null,
    evaluation_dialog: true,

};
const getters = {
    get_CurrentUser: (state) => state.CurrentUser,
    get_UserRole: (state) => state.UserRole,
    get_evaluation_dialog: (state) => state.evaluation_dialog,

};
const actions = {
    async IsAuthenticated({ commit, actions }) {
      
        if(state.CurrentUser.length == 0){
            const res = await axios.get(`/api/authenticated`)
            .catch((e) => {
                commit('SET_AUTHENTICATED', false);
                window.localStorage.removeItem('is_authenticated');
            })

            if (res.data == true) {
                window.localStorage.setItem('is_authenticated', true);
                commit('SET_AUTHENTICATED', true);
            }
        }   
        else{
            commit('SET_AUTHENTICATED', true);
            window.localStorage.setItem('is_authenticated', true);
        }
        
    },
    async fetchCurrentUser({ commit }) {
        if (state.CurrentUser.length == 0) {
            const res = await axios.get(`/api/users/details`)
            .catch((e) => {
                state.isSuccess = false;
            })

            if(res){
                state.isSuccess = true;
                state.CurrentUser = res.data;
            }
        }
    },
    clear_current_user({ rootState  }) {
        state.CurrentUser = [];
        state.UserRole = null;
        state.MyCourses = [];
        state.IsAuthenticated = false;
        state.AccessToken = null;
        rootState.classwork.current_classwork_id = null;
        rootState.classwork.current_course_id = null;
        window.localStorage.removeItem('is_authenticated');
        state.evaluation_dialog = true;
    },
    setStatus({ commit }, id) {
        state.CurrentUser.status = id;
    },

};
const mutations = {
    FETCH_USER: (state, CurrentUser) => (state.CurrentUser = CurrentUser),
    SET_USER_ROLE: (state, UserRole) => (state.UserRole = UserRole),
    SET_AUTHENTICATED: (state, IsAuthenticated) => (state.IsAuthenticated = IsAuthenticated),

};

export default {
    state,
    getters,
    actions,
    mutations
};