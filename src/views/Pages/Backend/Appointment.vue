<template>
    <!-- Home Banner -->
    <!-- Search -->
    <div class="form-group row ">
        <input type="text" class="form-control col-6" placeholder="" v-model="limits">
        <button type="submit" @click="search" class="btn btn-primary search-btn  col-2 m-2">
            <i class="fas fa-search"></i>
            <span>Search</span>
        </button>
    </div>
    <Customers :limit="limit" :key="limit"></Customers>
</template>

<script>
import Customers from '../../components/customer/Customers.vue'
export default {
    data(){
        return {
            limits: null,
            limit:0
        }
    },
    name: "Dashboard",
    components: {
        Customers
    },
    methods: {
            search:function() {
            this.limit = this.limits;
                console.log(this.limit);
            }
    }
}
</script>
