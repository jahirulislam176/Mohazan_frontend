import { createRouter, createWebHistory } from "vue-router";
import routes from './routes';
import store from '../store'
// configure router
const router = new createRouter({
    history: createWebHistory(),
    routes, // short for routes: routes
    linkActiveClass: 'active',
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});

router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requireAuth)) {
        if (!store.getters.loggedIn) {
            console.log('C');
            next({ name: 'Login' });
        } else {
            next();
        }
    } else {
        if (store.getters.loggedIn) {
            next({ name: 'Dashboard' });
        } else {
            next();
        }
        next();
    }
});

export default router;