<template>
    <!-- Appointment List -->
    <div class="row">
            <Item v-for="customer in customers" :key="customer.id" :customer="customer"></Item>
    </div>
    <!-- /Appointment List -->
</template>

<script>
import Item from './ItemH.vue'
import axios from "../../../axios";
export default {
    data() {
        return {
            customers: []
        }
    },
    name: "Dashboard",
    props:{
        limit:{
            type: Number,
            default:10
        }
    },
    components: {
        Item
    },
    created() {
        axios.get(`user?limit=${this.limit}`).then(res => {
            this.customers = res.data.data;
            console.log(res.data.data)
        }).catch(error => {
            console.log(error)
        })
    },
}
</script>

<style>

</style>