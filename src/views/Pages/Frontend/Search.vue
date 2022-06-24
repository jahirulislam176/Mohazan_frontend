<template>
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-1"></div>
                <TheCard :classes="'col-md-2'">
                    <SelectVue :options="categories" v-on:value="category" :Label="'Category'"></SelectVue>
                </TheCard>

                <TheCard v-if="sub_categories.length!=0" :classes="'col-md-2'">
                    <SelectVue :options="sub_categories" v-on:value="getProduct" :Label="'Sub Category'"></SelectVue>
                </TheCard>

                <TheCard :classes="'col-md-2'">
                    <SelectVue :Label="'Division'"></SelectVue>
                </TheCard>

                <TheCard :classes="'col-md-2'">
                    <SelectVue :Label="'District'"></SelectVue>
                </TheCard>
       

            </div>

        </div>
    </div>

    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                    <div>

                    </div>
                    <div class="card search-filter">
                        <div class="card-header">
                            <h4 class="card-title mb-0">Search Filter</h4>
                        </div>
                        <div class="card-body">
                            <div class="filter-widget">
                                <div class="cal-icon">
                                    <input type="text" class="form-control " placeholder="">
                                </div>
                            </div>
                            <div class="btn-search">
                                <button type="button" class="btn btn-block bg bg-white text-dark">Search</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-md-12 col-lg-6 col-xl-6">
                    <div v-for="product in products" :key="product.id">
                        <AllProduct :product="product"></AllProduct>
                    </div>
                    <!-- <div class="load-more text-center">
                    <a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
                </div> -->
                </div>
                <div class="col-xl-2">
                    <div style="margin-left:20px;width:100%">
                        <img src="/assets/img/17810920130038916910.png" class="img-fluid" />
                    </div>
                </div>
                <div class="col-xl-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TheCard from '../../components/Field/TheCard.vue'
import AllProduct from '../../components/product/AllProducts.vue'
import Input from '../../components/Field/Input.vue'
import SelectVue from '../../components/Field/Select.vue'
import SearchFilter from '../../components/customer/SearchFilter.vue'
import axios from "../../../axios";
export default {
    name: "SearchDoctor",
    components: {
        TheCard,
        AllProduct,
        Input,
        SearchFilter,
        SelectVue
    },
    data() {
        return {
            categories: [],
            sub_categories: [],
            products: [],
        }
    },
    created() {
        axios.get("category").then((res) => {
            this.categories = res.data.data;
        }).catch((err) => console.error(err));

    },
    methods: {
        category(category) {
            axios.get("category/" + category)
                .then((res) => {
                    this.sub_categories = res.data.data;
                }).catch((err) => console.error(err));
            this.getProduct(category)
        },
        getProduct(category) {
            this.products = []
            axios.get("search/bangladesh/" + category)
                .then((res) => {
                    this.products = res.data.data;
                    console.log(res.data.data)
                }).catch((err) => console.error(err));
        },

    }
}
</script>
