import axios from "axios";
import store from './store'

const axiosClient = axios.create({
    // baseURL: 'https://dummyapi.io/data/v1/',
    baseURL: 'http://103.108.147.103/api/',
    timeout: 10000,
});

// if (st 

// token = store.state.token;
// if (token) {
//     axios.defaults.headers.common['Authorization'] = token;
// } else {
//     axios.defaults.headers.common['Authorization'] = null;
// }
export default axiosClient;