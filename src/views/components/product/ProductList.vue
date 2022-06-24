<template>

    <div class="card-body mb-2" style="border-bottom:2px solid black" >
     <!-- v-on:input="(event) => this.$emit('value', event.target.value)" -->
        <div class="pro-widget-content">
            <div class="profile-info-widget">
                <a href="#" class="booking-doc-img">
                    <img src="assets/img/patients/patient.jpg" alt="User Image">
                </a>
                <div class="profile-det-info">
                    <h3>
                  {{ name}}
                    </h3>

                    <div class="patient-details">
                        <h4><strong>Price:</strong><b>${{ price}}</b></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="patient-info">
            <ul>
                <li>{{ location}} ,<span>{{ category}}</span></li>
                <li>
                    <a href="#">Just now</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from "../../../axios";
export default {
    name: "AllProduct",
    props: [
        'name',
        'price',
        'location',
        'category',

    ]
  
}
</script>