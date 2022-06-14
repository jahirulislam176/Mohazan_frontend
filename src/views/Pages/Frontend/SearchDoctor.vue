<template>
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-8 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Search</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">2245 matches found for : Dentist In Bangalore</h2>
                </div>
                <div class="col-md-4 col-12 d-md-block d-none">
                    <div class="sort-by">
                        <span class="sort-title">Sort by</span>
                        <span class="sortby-fliter">
                            <select class="select">
                                <option>Select</option>
                                <option class="sorting">Rating</option>
                                <option class="sorting">Popular</option>
                                <option class="sorting">Latest</option>
                                <option class="sorting">Free</option>
                            </select>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">

                    <!-- Search Filter -->
                  <SearchFilter></SearchFilter>
                    <!-- /Search Filter -->

                </div>

                <div class="col-md-12 col-lg-6 col-xl-6">

                    <!-- Doctor Widget -->
                    <!-- <div class="card">
                        <div class="card-body">
                            <div class="doctor-widget">
                                <div class="doc-info-left">
                                    <div class="doctor-img">
                                        <a href="doctor-profile.html">
                                            <img src="assets/img/doctors/doctor-thumb-01.jpg" class="img-fluid"
                                                alt="User Image">
                                        </a>
                                    </div>
                                    <div class="doc-info-cont">
                                        <h4 class="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
                                        <p class="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                        <h5 class="doc-department"><img
                                                src="assets/img/specialities/specialities-05.png" class="img-fluid"
                                                alt="Speciality">Dentist</h5>
                                        <div class="rating">
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star filled"></i>
                                            <i class="fas fa-star"></i>
                                            <span class="d-inline-block average-rating">(17)</span>
                                        </div>
                                        <div class="clinic-details">
                                            <p class="doc-location"><i class="fas fa-map-marker-alt"></i> Florida, USA
                                            </p>
                                            <ul class="clinic-gallery">
                                                <li>
                                                    <a href="assets/img/features/feature-01.jpg"
                                                        data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-01.jpg" alt="Feature">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/img/features/feature-02.jpg"
                                                        data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-02.jpg" alt="Feature">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/img/features/feature-03.jpg"
                                                        data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-03.jpg" alt="Feature">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="assets/img/features/feature-04.jpg"
                                                        data-fancybox="gallery">
                                                        <img src="assets/img/features/feature-04.jpg" alt="Feature">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="clinic-services">
                                            <span>Dental Fillings</span>
                                            <span> Whitneing</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="doc-info-right">
                                    <div class="clini-infos">
                                        <ul>
                                            <li><i class="far fa-thumbs-up"></i> 98%</li>
                                            <li><i class="far fa-comment"></i> 17 Feedback</li>
                                            <li><i class="fas fa-map-marker-alt"></i> Florida, USA</li>
                                            <li><i class="far fa-money-bill-alt"></i> $300 - $1000 <i
                                                    class="fas fa-info-circle" data-toggle="tooltip"
                                                    title="Lorem Ipsum"></i> </li>
                                        </ul>
                                    </div>
                                    <div class="clinic-booking">
                                        <a class="view-pro-btn" href="doctor-profile.html">View Profile</a>
                                        <a class="apt-btn" href="booking.html">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- /Doctor Widget -->

                    <!-- Doctor Widget -->
                    <DataSearch></DataSearch>



                    <div class="load-more text-center">
                        <a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <!-- /Page Content -->
</template>

<script>
import DataSearch from '../../components/consumer/DataSearch.vue'
import Input from '../../components/Field/Input.vue'
import SelectBox from '../../components/Field/SelectBox.vue'
import  SearchFilter from '../../components/customer/SearchFilter.vue'
export default{
    name:"SearchDoctor",
    components:{
    DataSearch,
    Input,
    SelectBox,
    SearchFilter

},
data(){
    return{
             fields:[
            {
                label: "Search By Date",
                placeholder: "Select Date",
                type: "date"
}
             ]
    }
}
}

</script>