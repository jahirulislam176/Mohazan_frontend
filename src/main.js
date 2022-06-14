import { createApp } from 'vue'

import App from './App.vue'
import router from "./router";
import store from './store'
// import toastr from "toastr";
import Toaster from "@meforma/vue-toaster";
// import "./assets/scss/app.scss"




// window.toastr = require('toaster')

createApp(App)
    .use(router)
    .use(store)
    .use(Toaster)
    .mount('#app')