<template>
 <nav class="user-tabs mb-4">
            <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
              <li class="nav-item">
               
                  <router-link :to="{name:'ProductOverView'}"    class="nav-link ">OverView</router-link>
              </li>
              <li class="nav-item">
                <!-- <a class="nav-link" href="#doc_locations" data-toggle="tab"
                  >Locations</a
                > -->
                <router-link :to="{name:'CustomerLocation'}" class="nav-link">
                     Locations
                </router-link>
              
              </li>
              <li class="nav-item">
             
                <router-link class="nav-link"  :to="{name:'CustomerReview'}" >Reviews</router-link>
              </li>
              <li class="nav-item">
               
                <router-link  class="nav-link"  :to="{name:'RelativeData'}">Related Products</router-link>
              </li>
            </ul>
          </nav>
            <router-view />
</template>

<script>

export default{
    name:"TabHeader"
}
</script>