<template>

<div class="content">
    <!-- Home Banner -->
    <div class="row">
        <div class="col-12">
            <div class="card-body">
                <div class="banner-wrapper">
                    <div class="search-box">
                        <form action="javascript:void(0)">
                            <div class="form-group search-location">
                                <select name="" class="form-control" id="">
                                    <option value="">All of Bangladesh</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Dhaka">Barishal</option>
                                </select>
                            </div>
                            <div class="form-group search-info">
                                <input type="text" class="form-control" placeholder="What are you looking for?">
                            </div>
                            <button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Home Banner -->

    <!-- Clinic and Specialities -->
    <div class="row">
        <div class="col-md-12">
            <div class="card dash-card">
                <div class="card-body">
                    <div class="section-header text-center">
						<h2>Browse items by category</h2>
					</div>
                    <div class="row px-5">
                        <div class="col-md-3 mb-4" v-for="row in categories" v-bind:key="row.id">
                            <div class="dash-widget">
                                <img src="/img/icon-01.png" class="img-fluid mx-2">
                                <div class="dash-widget-info">
                                    <h6>{{ row.name }}</h6>
                                    <h3>0</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Clinic and Specialities -->
</div>

</template>

<script>
import axios from "../../../axios";
export default {
    name:"Home",
    data() {
        return {
            //divisions: [],
            categories: [],
            sub_categories: [],
            //brands: [],
        }
    },
    methods: {
        read() {
            axios.get("category").then(res =>{
                     this.categories = res.data.data;
                }).catch((err) => console.error(err));

            // axios.get('brands').then(({ data }) => {
            //     this.brands= data;
            // }).catch((err) => console.error(err));
        },
        category(event) {
            axios.get("category/sub-categories",
             { params: { category_id: event.target.value } })
             .then(res =>{
                     this.categories = res.data.data;
                }).catch((err) => console.error(err));
        }
    },
    mounted() {
        this.read();
    }
}
</script>

<style>

</style>
