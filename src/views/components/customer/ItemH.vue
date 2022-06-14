<template>
    <!-- Appointment List -->
    <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="card widget-profile pat-widget-profile">
            <div class="card-body">
                <div class="pro-widget-content">
                    <div class="profile-info-widget">
                        <a href="javascript:void(0)" class="booking-doc-img">
                            <img :src="customer.picture" alt="User Image">
                        </a>
                        <div class="profile-det-info">
                            <h3><a href="javascript:void(0)" @click="get(customer.id)">{{ customer.firstName}} {{
                            customer.lastName}}</a></h3>

                            <div class="patient-details">
                                <h5><b>Patient ID :</b> P0016</h5>
                                <h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Alabama, USA</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="patient-info">
                    <ul>
                        <li v-if="phone">Phone <span>{{phone}}</span></li>
                        <li>Age <span>38 Years, Male</span></li>
                        <li>Blood Group <span>AB+</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="appointment-list">
        <div class="profile-info-widget">
            <a href="patient-profile.html" class="booking-doc-img">
                <img :src="customer.picture" alt="User Image">
            </a>
            <div class="profile-det-info">
                <h3><a href="javascript:void(0)">{{ customer.firstName}} {{ customer.lastName}}</a></h3>
                <div class="patient-details">
                    <h5><i class="far fa-clock"></i> 14 Nov 2019, 10.00 AM</h5>
                    <h5><i class="fas fa-map-marker-alt"></i> Newyork, United States</h5>
                    <h5><i class="fas fa-envelope"></i> richard@example.com</h5>
                    <h5 class="mb-0"><i class="fas fa-phone"></i> {{phone}}</h5>
                </div>
            </div>
        </div>
        <div class="appointment-action">
            <a href="javascript:void(0)" class="btn btn-sm bg-info-light" @click="get(customer.id)">
                <i class="far fa-eye"></i> View
            </a>
            <a href="javascript:void(0);" class="btn btn-sm bg-success-light">
                <i class="fas fa-check"></i> Accept
            </a>
            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                <i class="fas fa-times"></i> Cancel
            </a>
        </div>
    </div> -->
    <!-- /Appointment List -->
</template>

<script>
import axios from "../../../axios";
export default {
    name:"Item",
    data() {
        return {
            // id: null,
            phone: null
        }
    },
props:{
    customer:{
        type:Object
    }
    }, methods: {
        get: function (id) {
            axios.get(`user/${id}`).then(res => {
                // alert(res.data.phone)
                this.phone = res.data.phone;
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>