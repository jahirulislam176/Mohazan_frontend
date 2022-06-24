<template>
  <!-- Breadcrumb -->
  <!-- <div class="breadcrumb-bar">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-12 col-12">
          <nav aria-label="breadcrumb" class="page-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">
                Product
              </li>
            </ol>
          </nav>
          <h2 class="breadcrumb-title">Product details</h2>
        </div>
      </div>
    </div>
  </div> -->
  <!-- /Breadcrumb -->

  <!-- Page Content -->
  <div class="content">
    <div class="container">
      <!-- Doctor Widget -->
      <div class="card">
        <div class="card-body">
          <div class="doctor-widget">
            <div class="doc-info-left">
              <div class="doctor-img">
                <img
                  :src="img"
                  class="img-fluid"
                  alt="User Image" height="300px"
                />
              </div>
              <div class="doc-info-cont">
                <h4 class="doc-name">{{ name }}</h4>
             
                <p class="doc-speciality">
                  {{ sub_category.name + ", " + category.name }}
                </p>
               <h4>${{ price}}</h4>
                <div class="rating">
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star filled"></i>
                  <i class="fas fa-star"></i>
                  <span class="d-inline-block average-rating">(35)</span>
                </div>
                <div class="clinic-details">
                  <p class="doc-location">
                    <i class="fas fa-map-marker-alt"></i>{{ address}}
                    <a href="javascript:void(0);">Get Directions</a>
                  </p>
                  <ul class="clinic-gallery" style="width:100%">
                    <li  >
                      <a
                        :href="img"
                        data-fancybox="gallery"
                      >
                        <img :src="img" alt="Feature" style="300px"/>
                      </a>
                    </li>
                    <li>
                      <a
                        :href="img"
                        data-fancybox="gallery"
                      >
                        <img
                          :src="img"
                          alt="Feature Image"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                         :href="img"
                        data-fancybox="gallery"
                      >
                        <img :src="img" alt="Feature" />
                      </a>
                    </li>
                    <li>
                      <a
                         :href="img"
                        data-fancybox="gallery"
                      >
                        <img :src="img" alt="Feature" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="doc-info-right">


 <div class="wrappers">
    <div class="img-area">
      <div class="inner-area">
       <img  :src="creator.img" style="width:170px" />
      </div>
    </div>
   
    <div class="name">{{ creator.name}}</div>
    <div class="about">{{ creator.email}}</div>
    <div class="social-icons">
      <a href="javascript:void" class="fb"><i class="fab fa-facebook-f"></i></a>
      <a href="javascript:void" class="twitter"><i class="fab fa-twitter"></i></a>
      <a href="javascript:void" class="insta"><i class="fab fa-instagram"></i></a>
      <a href="javascript:void" class="yt"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="buttons">
      <button>Chat</button>
      <button type="button" @click="showAlert">Call</button>
   

    </div>

  </div>

            
            
         
          </div>
          
        </div>
        
      </div>
      <!-- /Doctor Widget -->

      <!-- Doctor Details Tab -->
      <div class="card">
        <div class="card-body pt-0">
          <!-- Tab Menu -->
         <TabHeader></TabHeader>
         <!-- <router-view></router-view> -->
          <!-- /Tab Menu -->

          <!-- Tab Content -->
          <div class="tab-content pt-0">
        
             <!-- <CustomerOverView></CustomerOverView>

             <Locations></Locations>

           <CustomerReviews></CustomerReviews>

            <RelatedProducts></RelatedProducts> -->
         
          </div>
        </div>
      </div>
      <!-- /Doctor Details Tab -->
    </div>
  </div>
  </div>

</template>

<script>
import RelatedProducts from '../../components/product/RelatedProducts.vue'
import CustomerOverView from "../../components/product/CustomerOverView.vue";
import Locations from "../../components/product/Locations.vue";
import CustomerReviews from "../../components/product/CustomerReviews.vue";
import TabHeader from "../../components/product/pages/TabHeader.vue";

import axios from "../../../axios";

export default {
  name: "ProductDetails",
  components: {
    RelatedProducts,
    CustomerOverView,
    Locations,
    CustomerReviews,
    TabHeader,
},

  data() {
    return {
      name: null,
      slug: null,
      price: null,
      img: null,
      category: [],
      sub_category: [],
      creator:[],
      address: null,
    };
  },
  created() {
    axios.get("product/" + this.$route.params.slug)
      .then((res) => {
        this.name = res.data.data.name;
        this.slug = res.data.data.slug;
        this.price = res.data.data.price;
        this.img = res.data.data.img;
        this.category = res.data.data.category;
        this.sub_category = res.data.data.sub_category;
        this.address = res.data.data.address;
        this.creator=res.data.data.creator
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{

    // openPopup: function () {
    //       alert('Contact Number O1222222222222')
    //     },
   showAlert() {
      // Use sweetalert2
      this.$swal('Call Me 01777777');
    },
}
}
</script>


<style>
.wrappers {
  position: relative;
  width: 200px;
  padding: 0px;
  margin-top:-20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.wrappers .icon {
  font-size: 17px;
  color: #31344b;
  position: absolute;
  cursor: pointer;
  opacity: 0.7;
  top: 15px;
  height: 35px;
  width: 35px;
  text-align: center;
  line-height: 35px;
  border-radius: 50%;
  font-size: 16px;
}
.wrappers .icon i {
  position: relative;
  z-index: 9;
}
.wrappers .icon.arrow {
  left: 15px;
}
.wrappers .icon.dots {
  right: 15px;
}
.wrappers .img-area {
  height: 150px;
  width: 150px;
  border-radius: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-area .inner-area {
  height: calc(100% - 25px);
  width: calc(100% - 25px);
  border-radius: 50%;
}
.inner-area img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.wrappers .name {
  font-size: 23px;
  font-weight: 600;
  color: #31344b;
  margin: 10px 0 5px 0;
}
.wrappers .about {
  color: #44476a;
  font-weight: 400;
  font-size: 16px;
  font-weight: 300;
}
.wrappers .social-icons {
  margin: 15px 0 25px 0;
}
.social-icons a {
  position: relative;
  height: 40px;
  width: 40px;
  margin: 0 5px;
  display: inline-flex;
  text-decoration: none;
  border-radius: 50%;
}
.social-icons a:hover::before,
.wrappers .icon:hover::before,
.buttons button:hover:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background: #ecf0f3;
  box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
}
.buttons button:hover:before {
  z-index: -1;
  border-radius: 5px;
}
.social-icons a i {
  position: relative;
  z-index: 3;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 40px;
}
.social-icons a.fb i {
  color: #4267b2;
}
.social-icons a.twitter i {
  color: #1da1f2;
}
.social-icons a.insta i {
  color: #e1306c;
}
.social-icons a.yt i {
  color: #ff0000;
}
.wrappers .buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.buttons button {
  position: relative;
  width: 100%;
  border: none;
  outline: none;
  padding: 12px 0;
  color: #31344b;
  font-size: 11pt;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  z-index: 4;
}
.buttons button:first-child {
  margin-right: 10px;
}
.buttons button:last-child {
  margin-left: 10px;
}
.wrappers .social-share {
  display: flex;
  width: 100%;
  margin-top: 30px;
  padding: 0 5px;
  justify-content: space-between;
}
.social-share .row {
  color: #31344b;
  font-size: 17px;
  cursor: pointer;
  position: relative;
}
.social-share .row::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 2px;
  background: #e0e6eb;
  margin-left: -25px;
}
.row:first-child::before {
  background: none;
}
.social-share .row i.icon-2 {
  position: absolute;
  left: 0;
  top: 50%;
  color: #31344b;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.row:nth-child(1):hover i.fa-heart,
.row:nth-child(2):hover i.fa-comment {
  opacity: 1;
  pointer-events: auto;
}

.social-share span {
  font-family: roboto condensed !important;
  font-weight: 300 !important;
}
</style>
