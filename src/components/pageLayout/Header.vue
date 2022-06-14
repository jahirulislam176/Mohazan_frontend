<template>
    <!-- Header -->
    <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <a href="index-2.html" class="navbar-brand logo">
                    <img src="assets/img/logo.png" class="img-fluid" alt="Logo">
                </a>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="index-2.html" class="menu-logo">
                        <img src="assets/img/logo.png" class="img-fluid" alt="Logo">
                    </a>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <li class="active">
                        <router-link :to="{name:'Home'}">Home</router-link>

                    </li>
                    <li class="has-submenu">
                        <a href="#">Customer<i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li>
                                <router-link :to="{name:'Dashboard'}">Dashboard</router-link>
                            </li>

                        </ul>
                    </li>

                    <li class="has-submenu">
                        <a href="#">Pages <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li>
                                <router-link :to="{ name:'SearchDoctor'}"> SearchCustomer</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'CustomerProfile'}"> Customer Profile</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'Checkout'}"> Checkout</router-link>
                            </li>
                            <li v-if="!loggedIn">
                                <router-link :to="{ name:'Login'}"> Login</router-link>
                            </li>
                            <li v-if="!loggedIn">
                                <router-link :to="{ name:'Register'}"> Register</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name:'ForgotPassword'}">ForgotPassword</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                    </li>
                    <li class="login-link" v-if="!loggedIn">
                        <router-link :to="{name:'Login'}">Login / Signup</router-link>
                    </li>
                    <!-- <a v-on:click="logout">
                        <i class="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a> -->

                </ul>
            </div>
            <ul class="nav header-navbar-rht">
                <li class="nav-item contact-item">
                    <div class="header-contact-img">
                        <i class="far fa-hospital"></i>
                    </div>
                    <div class="header-contact-detail">
                        <p class="contact-header">Contact</p>
                        <p class="contact-info-header"> +1 315 369 5943</p>
                    </div>
                </li>
                 <li class="nav-item" v-if="!loggedIn">
                    <router-link class="nav-link header-login" :to="{name:'Login'}">Login / Signup</router-link>
                </li> 
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    name: "Header",
    computed:{
        loggedIn(){
            return this.$store.getters.loggedIn
        }
    },
    // methods: {
    //     logout() {
    //         localStorage.clear();
    //         this.$router.push({ name: 'Login' })
    //         //console.warn("warn");
    //     }
   // }
}
</script>
