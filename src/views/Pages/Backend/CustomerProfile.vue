<template>

    <!-- Breadcrumb -->
 
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
        <div class="container">

            <!-- Doctor Widget -->
            <div class="card">
                <div class="card-body">
                    <div class="doctor-widget">
                        <div class="doc-info-left">
                           <h1>Hello</h1>
                            <div class="doctor-img">
                                <img src="assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image">
                            </div>
                            <div class="doc-info-cont">
                                <h4 class="doc-name">Dr. Darren Elder</h4>
                                <p class="doc-speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                                <p class="doc-department"><img src="assets/img/specialities/specialities-05.png"
                                        class="img-fluid" alt="Speciality">Dentist</p>
                                <div class="rating">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="d-inline-block average-rating">(35)</span>
                                </div>
                                <div class="clinic-details">
                                    <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Newyork, USA - <a
                                            href="javascript:void(0);">Get Directions</a></p>
                                    <ul class="clinic-gallery">
                                        <li>
                                            <a href="assets/img/features/feature-01.jpg" data-fancybox="gallery">
                                                <img src="assets/img/features/feature-01.jpg" alt="Feature">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="assets/img/features/feature-02.jpg" data-fancybox="gallery">
                                                <img src="assets/img/features/feature-02.jpg" alt="Feature Image">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="assets/img/features/feature-03.jpg" data-fancybox="gallery">
                                                <img src="assets/img/features/feature-03.jpg" alt="Feature">
                                            </a>
                                        </li>
                                        <li>
                                            <a href="assets/img/features/feature-04.jpg" data-fancybox="gallery">
                                                <img src="assets/img/features/feature-04.jpg" alt="Feature">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="clinic-services">
                                    <span>Dental Fillings</span>
                                    <span>Teeth Whitneing</span>
                                </div>
                            </div>
                        </div>
                        <div class="doc-info-right">
                            <div class="clini-infos">
                                <ul>
                                    <li><i class="far fa-thumbs-up"></i> 99%</li>
                                    <li><i class="far fa-comment"></i> 35 Feedback</li>
                                    <li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
                                    <li><i class="far fa-money-bill-alt"></i> $100 per hour </li>
                                </ul>
                            </div>
                            <div class="doctor-action">
                                <a href="javascript:void(0)" class="btn btn-white fav-btn">
                                    <i class="far fa-bookmark"></i>
                                </a>
                                <a href="chat.html" class="btn btn-white msg-btn">
                                    <i class="far fa-comment-alt"></i>
                                </a>
                                <a href="javascript:void(0)" class="btn btn-white call-btn" data-toggle="modal"
                                    data-target="#voice_call">
                                    <i class="fas fa-phone"></i>
                                </a>
                                <a href="javascript:void(0)" class="btn btn-white call-btn" data-toggle="modal"
                                    data-target="#video_call">
                                    <i class="fas fa-video"></i>
                                </a>
                            </div>
                            <div class="clinic-booking">
                                <a class="apt-btn" href="booking.html">Book Appointment</a>
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
                    <nav class="user-tabs mb-4">
                        <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                            <li class="nav-item">
                                <a class="nav-link active" href="#doc_overview" data-toggle="tab">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#doc_locations" data-toggle="tab">Locations</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#doc_reviews" data-toggle="tab">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#doc_business_hours" data-toggle="tab">Business Hours</a>
                            </li>
                        </ul>
                    </nav>
                    <!-- /Tab Menu -->

                    <!-- Tab Content -->
                    <div class="tab-content pt-0">

                        <!-- Overview Content -->
                      <CustomerOverView></CustomerOverView>
                        <!-- Locations Content -->
                 <Locations></Locations>
                        <!-- /Locations Content -->

                        <!-- Reviews Content -->
                      <CustomerReviews></CustomerReviews>
                        <!-- /Reviews Content -->

                        <!-- Business Hours Content -->
                       <BusinessHour></BusinessHour>
                        <!-- /Business Hours Content -->

                    </div>
                </div>
            </div>
            <!-- /Doctor Details Tab -->

        </div>
    </div>


</template>
<script>
import CustomerOverView from "../../components/customer/CustomerOverView.vue";
import Locations from "../../components/customer/Locations.vue";
import ReviewList from "../../components/review/ReviewList.vue";
import CustomerReviews from "../../components/customer/CustomerReviews.vue";
import BusinessHour from "../../components/customer/BusinessHour.vue";
// import CustomerOverView from "../../components/customer/CustomerOverView.vue";
export default{
    name: "CustomerProfile",
    components: { CustomerOverView, Locations, ReviewList, CustomerReviews, BusinessHour },
    // data(){
    //     return{
    //    slug:[]
    //       //product:[]
    //     }
    // },
    // mounted() {
    //     let app = this;
    //     let s_value = app.$route.params.slug;
    //     console.log(s_value)
    //     app.slug= s_value;
    //     axios.get('/products/' + slug)
    //         .then(function (resp) {
    //             app.slug = resp.data;
    //            // console.log(val)
    //         })
    //         .catch(function () {
    //             alert("Could not load teacher")
    //         });
    // },
    // created() {
    //     axios.get('products/slug').then(res => {
    //       this.products = res.data.data;
    //        //console.log(d)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // },

    // created(){
    //   //alert(this.$routes.params.data)
      
    // }
}


</script>