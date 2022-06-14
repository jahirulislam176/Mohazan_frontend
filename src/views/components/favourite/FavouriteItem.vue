<template>

    <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="profile-widget">
            <div class="doc-img">
                <a href="doctor-profile.html">
                    <img class="img-fluid" alt="User Image" src="assets/img/doctors/doctor-02.jpg">
                </a>
                <a href="javascript:void(0)" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                </a>
            </div>
            <div class="pro-content">
                <h3 class="title">
                    <a href="doctor-profile.html">Darren Elder</a>
                    <i class="fas fa-check-circle verified"></i>
                </h3>
                <p class="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(35)</span>
                </div>
                <ul class="available-info">
                    <li>
                        <i class="fas fa-map-marker-alt"></i> Newyork, USA
                    </li>
                    <li>
                        <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                        <i class="far fa-money-bill-alt"></i> $50 - $300 <i class="fas fa-info-circle"
                            data-toggle="tooltip" title="Lorem Ipsum"></i>
                    </li>
                </ul>
                <div class="row row-sm">
                    <div class="col-6">
                      
                        <router-link :to="{ name:'CustomerProfile'}" class="btn view-btn">View Profile</router-link>
                      
                    </div>
                    <div class="col-6">
                        <a href="booking.html" class="btn book-btn">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>




</template>

<script>
export default{
    name:"FavourItem"
}
</script>