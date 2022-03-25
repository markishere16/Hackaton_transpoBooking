/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue').default;
 import vuetify from './plugin/vuetify'
 import router from './router'
 import store from "./store/store";


 import VueSplash from 'vue-splash';
 
Vue.use(VueSplash);
 

 // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
 
 Vue.component('main-component', require('./components/app.vue').default);
 
 
 
 const app = new Vue({
     el: '#app',
     vuetify,
     router,
     store
    
 });
 