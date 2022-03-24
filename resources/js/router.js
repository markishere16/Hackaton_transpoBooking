import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
    mode: "history",
    routes: [{
            path: "",
            component: () =>
                import ( /*webpackChunkName: "mainApp"*/ "./components/app"),
            name: "Main App",
<<<<<<< HEAD
            children: [{
                path: "",
                component: () =>
                    import ( /*webpackChunkName: "mainLayout"*/ "./components/layout/mainLayout"),
                name: "Home",
                children: [{
                        path: "",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/home"),
                        name: "Home"

                    },
                    {
                        path: "map",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/mapComponent"),
                        name: "map"

                    },

                ]

            }]
        },

=======
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
       
>>>>>>> 894978800cb49adc9f3b9a839f19d08e5a610643
    ]
})

export default router