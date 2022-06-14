<template>
    <div class="col-md-8 col-lg-8 col-xl-12">
        <div class="row row-grid">
            <FavourItem></FavourItem>
            <!-- <AllProduct></AllProduct> -->

        </div>
    </div>

</template>

<script>
import FavourItem from '../../components/favourite/FavouriteItem.vue'
export default{ 
name:"Favourite",
components:{
    FavourItem
}
}

</script>