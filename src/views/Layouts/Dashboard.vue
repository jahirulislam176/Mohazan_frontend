<template>

    <!-- Page Content -->
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                    <!-- Profile Sidebar -->
                    <div class="profile-sidebar">
                        <div class="widget-profile pro-widget-content">
                            <div class="profile-info-widget">
                                <a href="#" class="booking-doc-img">
                                    <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
                                </a>
                                <div class="profile-det-info">
                                    <h3>Customer Name</h3>

                                    <div class="patient-details">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-widget">
                            <nav class="dashboard-menu">
                                <ul>
                                    <li>
                                        <router-link :to="{ name: 'Dashboard' }">
                                            <i class="fas fa-columns"></i>
                                            <span>Dashboard</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{ name: 'Appointment' }">
                                            <i class="fas fa-calendar-check"></i>
                                            <span>Appointments</span>
                                        </router-link>
                                    </li>
                                    <li>

                                        <router-link :to="{ name: 'ProductAdd' }">
                                            <i class="fas fa-user-injured"></i>
                                            <span>Product Add</span>
                                        </router-link>
                                    </li>
                                    <li>

                                        <router-link :to="{ name: 'ProductList' }">
                                            <i class="fas fa-user-injured"></i>
                                            <span>Product List</span>
                                        </router-link>
                                    </li>

                                    <li>
                                        <router-link :to="{ name: 'Invoice' }">
                                            <i class="fas fa-file-invoice"></i>
                                            <span>Invoices</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{ name: 'InvoiceView' }">
                                            <i class="fas fa-file-invoice"></i>
                                            <span>InvoicesView</span>
                                        </router-link>
                                    </li>
                                    <li>

                                        <router-link :to="{ name: 'Reviews' }">
                                            <i class="fas fa-star"></i>
                                            <span>Reviews</span>
                                        </router-link>

                                    </li>
                                    <li>

                                        <router-link :to="{ name: 'Message' }">
                                            <i class="fas fa-comments"></i>
                                            <span>Message</span>
                                            <small class="unread-msg">23</small>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{ name: 'ProfileSetting' }">
                                            <i class="fas fa-user-cog"></i>
                                            <span>Profile Settings</span>
                                        </router-link>



                                    </li>
                                    <li>


                                        <router-link :to="{ name: 'ChangePassword' }">
                                            <i class="fas fa-lock"></i>
                                            <span>Change Password</span>
                                        </router-link>


                                    </li>
                                    <li>


                                        <router-link :to="{ name: 'Favourite' }">
                                            <i class="fas fa-lock"></i>
                                            <span>Favourite</span>
                                        </router-link>


                                    </li>
                                    <li>


                                        <router-link :to="{ name: 'Calender' }">
                                            <i class="fas fa-lock"></i>
                                            <span>Calender</span>
                                        </router-link>


                                    </li>

                                    <li>
                                        <!-- <router-link :to="{name:'Logout'}"> <i class="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </router-link> -->

                                        <a @click.prevent="logout()">
                                            <i class="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </a>
                                        <!-- <a @click="logout()">
                                            <i class="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </a> -->
                                        <!-- <a href="#">
                                            <i class="fas fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                        </a> -->
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- /Profile Sidebar -->

                </div>

                <div class="col-md-7 col-lg-8 col-xl-9">
                    <router-view />
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import router from '../../router'
import { mapGetters } from 'vuex'
export default {
    name: "Dashboard",
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn
        }
    },
    // methods:{
    //     logout(){
    //         localStorage.clear();
    //         this.$router.push({name:'Login'})
    //         //console.warn("warn");
    //     }
    // }

    methods:{



        logout(){

            this.$store.dispatch('logout').then((res) => {
               console.log(res);
               //return redirect('login')
                this.$router.push({
                    name: "Login",
                });
        })
        }
     }
     //,computed:{
    //     ...mapGetters(['user'])
    // }

    // created() {
    //     this.$store.dispatch('logout').then(() => {
    //         this.$router.push({
    //             name: "Login"
    //             // path:'/login'
    //         })
    //     })
    // },
    // logout() {
    //     this.$store
    //         .dispatch("logout")
    //         .then((res) => {
    //             // toastr.success(res.data.message);
    //             this.$router.push('/login');
    //         })
    //         .catch((error) => {
    //             const data = error.response.data;
    //             if (typeof data === "object" && typeof data.errors === "object") {
    //                 for (const [k, v] of Object.entries(data.errors)) {
    //                     toastr.error(v);
    //                 }
    //             } else {
    //                 toastr.error(data.message);
    //             }
    //        });
    // },
}
</script>
