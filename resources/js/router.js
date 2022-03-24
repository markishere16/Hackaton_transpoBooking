import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [
        {
            path: "",
            component: () =>import ( /*webpackChunkName: "mainApp"*/ "./components/app"),
            name: "Main App",
            children:[
                {
                    path: "",
                    component: () =>import ( /*webpackChunkName: "mainLayout"*/ "./components/layout/mainLayout"),
                    children:[
                        {
                            path: "",
                            component: () =>import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/home/home"),
                            name: "Home"
                    
                        },
                        {
                            path: "/vehiclelist",
                            component: () =>import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/VehicleList/vehicleList"),
                            name: "vehiclelist",
                        },
                        {
                            path: "/profile",
                            component: () =>import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/profile/profile"),
                            name: "profile",
                        }
                    ]
            
                },

            ]
        },
        {
            path: "/login",
            component: () =>import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/login/login"),
            name: "login",
        }
       
    ]
})

export default router