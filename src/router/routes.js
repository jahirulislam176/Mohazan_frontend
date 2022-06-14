import Dashboard from '../views/Layouts/Dashboard.vue';
//import VueRouter from 'vue-router'
//const { isNavigationFailure, NavigationFailureType } = VueRouter
//import router from "./router";


// import NotFound from '../views/Errors/404.vue';

const routes = [{
        path: '/',
        redirect: 'Dashboard',
        meta: { requireAuth: true },
        component: Dashboard,
        children: [{
                path: '/dashboard',
                name: 'Dashboard',

                component: () =>
                    import ('../views/Pages/Backend/Dashboard.vue')
            }, {
                path: '/appointment',
                name: 'Appointment',
                component: () =>
                    import ('../views/Pages/Backend/Appointment.vue')
            }, {
                path: '/productlist',
                name: 'ProductList',

                component: () =>
                    import ('../views/Pages/Backend/ProductList.vue')
            }, {
                path: '/reviews',
                name: 'Reviews',
                component: () =>
                    import ('../views/Pages/Backend/Reviews.vue')
            }, {
                path: '/message',
                name: 'Message',
                component: () =>
                    import ('../views/Pages/Backend/Message.vue')
            }, {
                path: '/invoice',
                name: 'Invoice',
                component: () =>
                    import ('../views/Pages/Backend/Invoices.vue')
            }, {
                path: '/profilesetting',
                name: 'ProfileSetting',
                component: () =>
                    import ('../views/Pages/Backend/ProfileSetting.vue')
            }, {
                path: '/changepassword',
                name: 'ChangePassword',
                component: () =>
                    import ('../views/Pages/Backend/ChangePassword.vue')
            }, {
                path: '/favourite',
                name: 'Favourite',
                component: () =>
                    import ('../views/Pages/Backend/Favourite.vue')
            }, {
                path: '/calender',
                name: 'Calender',
                component: () =>
                    import ('../views/Pages/Backend/Calender.vue')
            }, {
                path: '/invoiceview',
                name: 'InvoiceView',
                component: () =>
                    import ('../views/Pages/Backend/InvoicesView.vue')

            }, {
                path: '/customerprofile',
                name: 'CustomerProfile',
                component: () =>
                    import ('../views/Pages/Backend/CustomerProfile.vue')
            },

            {
                path: '/productadd',
                name: 'ProductAdd',
                component: () =>
                    import ('../views/Pages/Backend/ProductAdd.vue')
            }


        ]
    },
    // { path: '*', component: NotFound}
    {
        path: '/home',
        name: 'Home',

        component: () =>
            import ('../views/Pages/Frontend/Home.vue'),

    }, {
        path: '/searchdoctor',
        name: 'SearchDoctor',
        component: () =>
            import ('../views/Pages/Frontend/SearchDoctor.vue')
    }, {
        path: '/checkout',
        name: 'Checkout',
        component: () =>
            import ('../views/Pages/Frontend/Checkout.vue')
    }, {
        path: '/login',
        name: 'Login',
        //meta: { requireAuth: false },
        component: () =>
            import ('../views/Pages/Frontend/Login.vue')
    }, {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Pages/Frontend/Register.vue')
    }, {
        path: '/forgotpassword',
        name: "ForgotPassword",
        component: () =>
            import ('../views/Pages/Frontend/ForgotPassword.vue')
    },

    {
        path: '/notfound',
        name: "Notfound",
        component: () =>
            import ('../views/Pages/Error/404.vue')
    }, {
        path: '/500',
        name: "500",
        component: () =>
            import ('../views/Pages/Error/500.vue')
    },

    {
        path: '/customerprofile',
        name: "CustomerProfile",
        component: () =>
            import ('../views/Pages/Frontend/CustomerProfile.vue')
    },

];



// router.beforeEach((to, from, next) => {
//     auth.checkAuth() // Internally this gets the token from localStorage, and sets user.authenticated to true if it's there
//     Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
//     if (to.path !== '/login' && !store.state.user.authenticated) { // Not logged in? You get booted to /login
//         router.push('/login')
//     } else if (to.path === '/login' && store.state.user.authenticated) { // Let's not allow a login transition if we're already logged in
//         router.push('/')
//     }
//     next()
// })


export default routes;