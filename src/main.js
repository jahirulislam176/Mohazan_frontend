import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import Toaster from "@meforma/vue-toaster";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueUniversalModal from 'vue-universal-modal'
import 'vue-universal-modal/dist/index.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import VueIframe from 'vue-iframes'
library.add(fas);
createApp(App)
    .use(router)
    .use(store)
    .use(Toaster)
    .use(VueIframe)
    .use(VueSweetalert2)
    .component('fa', FontAwesomeIcon)
    .component('QuillEditor', QuillEditor)
    .mount('#app')