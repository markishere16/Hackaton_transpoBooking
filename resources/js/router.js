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
            children: [{
                path: "",
                component: () =>
                    import ( /*webpackChunkName: "mainLayout"*/ "./components/layout/mainLayout"),
                children: [{
                        path: "",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/home/home"),
                        name: "Home"
                    },
                    {
                        path: "/vehiclelist",
                        component: () =>
                            import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/VehicleList/vehicleList"),
                        name: "vehiclelist",
                    },
                    {
                        path: "/profile",
                        component: () =>
                            import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/profile/profile"),
                        name: "profile",
                    },
                    {
                        path: "map",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/mapComponent"),
                        name: "map"
                    },

                    {
                        path: "/bookingPreview/:id",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/bookingPreview/bookingPreview"),
                        name: "bookingPreview"
                    },
                    {
                        path: "/passenger-bookingPreview/:id",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/bookingPreview/passenger-bookingPreview"),
                        name: "passenger-bookingPreview"
                    },
                    {
                        path: "manage-user",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/manage-user/manage-userComponent"),
                        name: "manageUser"
                    },
                    {
                        path: "history",
                        component: () =>
                            import ( /*webpackChunkName: "mainLayout"*/ "./components/pages/history/history"),
                        name: "history"
                    },
                ]
            }]
        },

        {
            path: "/login",
            component: () =>
                import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/login/login"),
            name: "login",
        },
        {
            path: "/sign-up",
            component: () =>
                import ( /*webpackChunkName: "vehicleList"*/ "./components/pages/register/register"),
            name: "signup",
        }

    ]
})

export default router