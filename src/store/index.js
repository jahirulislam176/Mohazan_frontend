import { createStore } from "vuex";
import axios from "../axios";
//axios.defaults.baseURL = "http://103.108.147.103/api"
const store = createStore({
    state: {
        token: localStorage.getItem('token') || null
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        user: (state) => {
                return state.user;
            }
            // isLogged: state => {
            //     return state.isLogged
            // }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        removeToken(state) {
            state.token = null
        },

        // check(state, data) => {
        //     state.user.authenticated = false
        // }
    },
    actions: {

        // user(context, user) {
        //     context.commit('user', user);
        // },
        login(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/login', credentials).then(res => {
                    localStorage.setItem('token', res.data.data.token)
                    context.commit('setToken', res.data.data.token)
                    resolve(res.data);
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout(context) {
            localStorage.removeItem('token')
            context.commit('removeToken')
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
            return new Promise((resolve, reject) => {
                axios.post('/logout').then(res => {
                    // localStorage.removeItem('token')
                    //context.commit('removeToken')
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })


            // localStorage.removeItem('token')
            // context.commit('removeToken')
            //  axios.defaults.headers.common['Authorization'] = 'Bearer' + context.state.token
            //return new Promise((resolve, reject) => {
            // axios.post('/logout').then(res => {
            //localStorage.removeItem('token')
            //             // localStorage.setItem('token', res.data.data.token)
            //             // localStorage.setItem('test', 'test')
            //         context.commit('removeToken', res.data.data.token)
            //         resolve(res)
            //     }).catch(error => {
            //         reject(error)
            //     })
            // })

        },
        // user(state, user) {
        //     state.user = user;
        // }
    },
    modules: {}
});
export default store;