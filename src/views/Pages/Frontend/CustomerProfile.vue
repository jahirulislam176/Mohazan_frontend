<template>

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Doctor Profile</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Doctor Profile</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
        <div class="container">

            <!-- Doctor Widget -->
            <CustomersProfile></CustomersProfile>
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
import CustomersProfile from "../../components/customer/CustomersProfile.vue";
export default{
    name: "CustomerProfile",
    components: { CustomerOverView, Locations, ReviewList, CustomerReviews, BusinessHour,CustomersProfile}
}


</script>