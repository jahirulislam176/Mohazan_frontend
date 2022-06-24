<template>
<div class="card" :class="classes" :style="styles">
    <div class="card-body">
        <div class="doctor-widget">
            <div class="doc-info-left">
                <div class="doctor-img">
                    <img :src="img" class="img-fluid" alt="User Image" style="height: 170px;" />
                </div>
                <div class="doc-info-cont">
                    <h4 class="doc-name">
                        <router-link :to="{ name: 'ProductDetails', params: { slug: product.slug } }">
                            {{ name }}
                        </router-link>
                    </h4>
                    <h5 class="doc-department">
                        {{ sub_category.name + ", " + category.name }}
                    </h5>
                    <h4>${{ price }}</h4>
                    <!-- <div class="rating">
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star filled"></i>
                            <i class="fas fa-star"></i>
                            <span class="d-inline-block average-rating">(35)</span>
                        </div> -->
                    <div class="clinic-details">
                        <p class="doc-location">
                            <i class="fas fa-map-marker-alt"></i> {{ address }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="doc-info-right">
                <div class="clini-infos">
                </div>
                <div class="clinic-booking">
                    <div style="">
                        <span>
                            <a href="#" class="btn" style="border: none; box-shadow: none">
                                <fa icon="share" style="
                      height: 15px;
                      margin-left: 150px;
                      margin-right: 10px;
                      height: 30px;
                    " />
                            </a>
                        </span>
                        <span>
                            <a href="#" style="border: none; box-shadow: none">
                                <fa icon="heart" style="margin-right: -165px; height: 30px" />
                            </a>
                        </span>
                    </div>
                    <p style="width: 100%; margin-left: 70%">Just Now</p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- </div> -->
</template>

<script>
export default {
    name: "AllProducts",
    data() {
        return {
            name: null,
            slug: null,
            price: null,
            img: null,
            category: [],
            sub_category: [],
            address: null,
        };
    },
    props: ['product', 'classes', 'styles'],

    created() {
        this.name = this.product.name;
        this.slug = this.product.slug;
        this.price = this.product.price;
        this.category = this.product.category;
        this.sub_category = this.product.sub_category;
        this.address = this.product.address;
        this.img = this.product.img;
    },
};
</script>
