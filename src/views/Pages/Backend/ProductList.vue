<template>
<div class="content">
    <div class="container-fluid" style="margin-top: -26px;">
        <div class="row">
            <div class="col-md-6 col-lg-6 col-xl-8">
                <h4 class="bg bg-white p-2 mb-0 text-center">Search Your Product By Category</h4>
                <div class="row">
                    <div class="col-xl-6">
                        <SelectVue :options=" categories" v-on:value="category" :styles="'margin-top: -10px;'"></SelectVue>
                    </div>
                    <div class="col-xl-6" v-if="sub_categories.length!=0">
                        <SelectVue :options="sub_categories" v-on:value="getProduct" :styles="'margin-top: -10px;'"></SelectVue>
                    </div>
                    <div class="col-xl-6" v-else>
                        <h5 style="margin-top:10px;width:100%;font-size:16px;" class="badge bg bg-white p-3 bg-white">Please Select Your Category</h5>
                        <!-- <span class="badge text-bg-info">Info</span> -->
                    </div>
                </div>

                <div v-for="product in products" :key="product.id">
                    <AllProduct :product="product" :styles="'margin-top: 14px;'"></AllProduct>
                </div>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import SelectVue from '../../components/Field/Select.vue';
import AllProduct from '../../components/product/AllProducts.vue'
import axios from "../../../axios";
export default {
    name: "ProductList",
    components: {
        SelectVue,
        AllProduct
    },
    data() {
        return {
            categories: [],
            sub_categories: [],
            products: []
        }
    },
    created() {
        axios.get("category").then((res) => {
            this.categories = res.data.data;
        }).catch((err) => console.error(err));
        this.getProduct();

    },
    methods: {
        category(category) {

            axios.get("category/" + category)
                .then((res) => {
                    this.sub_categories = res.data.data;
                    console.log(res.data.data)
                }).catch((err) => console.error(err));
            this.getProduct(category);

        },
        getProduct(category = '') {
            this.products = []
            axios.get("search/bangladesh/" + category)
                .then((res) => {
                    this.products = res.data.data;
                    console.log(res.data.data)
                }).catch((err) => console.error(err));
        },

    },
}
</script>
