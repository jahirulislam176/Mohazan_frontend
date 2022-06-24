<template>
    <div class="col-md-8 col-lg-8 col-xl-12">
        <div class="row row-grid">
            <Item></Item>
            <!-- <AllProduct></AllProduct> -->

        </div>
    </div>

</template>

<script>
import Item from '../../components/favourite/Item.vue'
export default{ 
name:"Favourite",
components:{
   Item
}
}

</script>