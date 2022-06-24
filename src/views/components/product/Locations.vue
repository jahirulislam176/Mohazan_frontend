<template>
    <div id="doc_locations" >

        <!-- Location List -->
         <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                        <h4><b>Address:</b>  {{ address}}</h4>
                                    </div>
                                    <div class="card-body">  
                                      <iframe :src="gmap" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>    
                                        <!-- <iframe width="100%" height="320px" src="google.com"></iframe> -->
                                    </div>
                                </div>
                            </div>
                        </div>
    
        <!-- /Location List -->

        <!-- Location List -->
     
        <!-- /Location List -->

    </div>
</template>
<script>
import axios from "../../../axios";
export default{
    name:"Locations",
    data() {
    return {
        // location:[]
      address:null,
      gmap:null
    };
  },
  created() {
    axios.get("product/" + this.$route.params.slug+"/location")
      .then((res) => {
        // this.location = res.data.data.location;
        this.address=res.data.data.address;
        this.gmap=res.data.data.gmap;
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
}
}

</script>