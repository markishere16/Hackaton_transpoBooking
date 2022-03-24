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

    ]
})

export default router