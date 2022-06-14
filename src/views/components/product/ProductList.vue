<template>
    <!-- <div class="col-md-3">
        <label class="form-label sort-title">Category</label>
        <select class="form-control" @change="category($event)" v-bind:key="category">
            <option>Select Category</option>
            <option v-for="row in categories" v-bind:key="row.id" v-bind:value="row.id">
                {{ row.name }}
            </option>
        </select>
    </div> -->
    <div class="card-body">
        <div class="pro-widget-content">
            <div class="profile-info-widget">
                <a href="patient-profile.html" class="booking-doc-img">
                    <img src="assets/img/patients/patient.jpg" alt="User Image">
                </a>
                <div class="profile-det-info" v-for="row in products" :key="row">
                    <h3>


                        {{row.name}}
                    </h3>

                    <div class="patient-details">
                        <h4><strong>Price:</strong><b>$222</b></h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="patient-info">
            <ul>
                <li>Phone <span>+1 952 001 8563</span></li>
                <li>Age <span>38 Years, Male</span></li>
                <li>Blood Group <span>AB+</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "../../../axios";
export default {
    name: "AllProduct",
    data() {
        return {
           // categories: [],
            // sub_categories: [],
             products: [],
        };
    },
    created() {
        axios.get('product').then(res => {
            this.products = res.data.data;
        }).catch(error => {
            console.log(error)
        })
    },
    //methods: {
        // read() {
        //     axios.get("category/categories").then(res => {
        //         this.categories = res.data.data;
        //     }).catch((err) => console.error(err));
        //     axios.get("search", {
        //         // params: {
        //         //     sub_category_id: event.target.value
        //         // }
        //     }).then(res => {
        //         this.products = res.data.data;
        //     }).catch((err) => console.error(err));
        // },
        // category(event) {
        //     axios.get("category/sub-categories", {
        //         params: {
        //             category_id: event.target.value
        //         }
        //     }).then(res => {
        //         this.sub_categories = res.data.data;
        //     }).catch((err) => console.error(err));
        // },
        // search(event) {
        //     axios.get("search", {
        //         params: {
        //             sub_category_id: event.target.value
        //         }
        //     }).then(res => {
        //         this.products = res.data.data;
        //     }).catch((err) => console.error(err));
        // },
    //},
    // mounted() {
    //     this.read();
    // },
    // created() {
    //     axios.get('product').then(res => {
    //         this.products = res.data.data;
    //         //console.log(res)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // },
}
</script>