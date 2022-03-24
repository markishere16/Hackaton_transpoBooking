import Vue from 'vue'
import Vuetify from 'vuetify/dist/vuetify.min.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                primary: '#FF9800',
            },
        },
    },

    
}

export default new Vuetify(opts)