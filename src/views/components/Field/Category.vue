<template>
<!-- <SelectVue v-data="Category" class=""col-md-5> -->
<div class="card" :class="classes" >
    <div class="card-title">
{{ title }}
    </div>
    <div class="card-body">
         <SelectVue :options="categories"  v-on:value="category"   :Label="'Category'"></SelectVue>
    </div>
</div>
<div class="card" v-if="sub_categories.length!=0" :class="classes">
    <div class="card-title">

    </div>
    <div class="card-body">
           <SelectVue    :options="sub_categories"  :Label="'Sub Category'" 
            v-on:input="(event) => this.$emit('sub_category', event.target.value)" ></SelectVue>
    </div>
</div>
<div class="card"  :class="classes">
    <div class="card-title">

    </div>
    <div class="card-body">
         <SelectVue :Label="'Division'" :options="address"  ></SelectVue>
    </div>
</div>
<div class="card"  :class="classes">
    <div class="card-title">

    </div>
    <div class="card-body">
          <SelectVue :Label="'District'"  ></SelectVue>
    </div>
</div> 
  
 <!-- <SelectVue v-if="sub_categories.length!=0" :options="sub_categories" Label="'Sub Category'"  v-on:value="category"  :class="classes"  v-on:input="(event) => this.$emit('sub_category', event.target.value)"></SelectVue> -->


    <!-- <SelectVue v-if="sub_categories.length!=0"   :options="sub_categories"  :Label="'Sub Category'"  :class="classes"   v-on:input="(event) => this.$emit('sub_category', event.target.value)"  ></SelectVue> -->

    <!-- <SelectVue :Label="'Division'" :class="classes"  ></SelectVue>
    <SelectVue :Label="'District'" :class="classes" ></SelectVue>  -->

    


</template>

<script>
import axios from "../../../axios";
import SelectVue from "./Select.vue";
export default {
    
    name: "Category",
    props:['classes','title'],
    components:{
        SelectVue
    },

    data() {

        return {
            categories: [],
            sub_categories: []
        };
    },
    created() {
        axios.get("category").then((res) => {
                this.categories = res.data.data;
            }).catch((err) => console.error(err));
           
    },
    methods: {
        category(value) {
            axios.get("category/" + value)
                .then((res) => {
                    this.sub_categories = res.data.data;
                }).catch((err) => console.error(err));
        },

    },

       
    

}
</script>
