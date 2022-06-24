<template>
  <div class="container">

    <div class="card">
      <div class="form-control bg bg-white">
        <h3 class="text-center">Product Add Form</h3>
      </div>
      <form>
        <div class="row" style="margin-top: 15px;">

          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12">
                <TheCard>
                  <InputF v-for="field in fields" :key="field.id" :label="field.label" :placeholder="field.placeholder"
                    :type="field.type"></InputF>
                </TheCard>
                <TheCard style="margin-top: -70px; border: none;">
                  <label for="">Product Description</label>
                  <QuillEditor theme="snow" />
                </TheCard>
                <TheCard style="margin-top: -50px; border: none;">
                  <label for="">Upload Image</label><br>
                  <input type="file" name="image" ref="files" multiple>
                  <!-- <input> -->
                </TheCard>
              </div>
            </div>

          </div>
          <div class="col-md-6">
            <div class="row">



              <div class="col-md-12">

                <TheCard>
                  <div class="row">
                    <div class="col-md-6">
                      <SelectVue :Label="'Division'"></SelectVue>
                    </div>
                    <div class="col-md-6">
                      <SelectVue :Label="'District'"></SelectVue>
                    </div>
                  </div>


                </TheCard>
              </div>


              <div class="col-md-12">

                <TheCard>
                  <div class="row">
                    <div class="col-md-6">
                      <SelectVue :options="categories" :Label="'Category'" v-on:value="category"></SelectVue>
                    </div>
                    <div class="col-md-6">
                      <SelectVue :Label="'Sub Category'" :options="sub_categories"></SelectVue>

                    </div>
                  </div>


                </TheCard>
              </div>
              <!-- <div class="col-md-6" v-if="sub_categories!=0">
                <TheCard>

                </TheCard>
              </div> -->
              <!-- <div class="col-md-6" >

                <TheCard>
                  <p style="margin-top:20px; font-size:16px;margin-left:-35px" class="badge bg bg-white p-3 bg-white">
                    Please
                    Select Your Category </p>
                </TheCard>

              </div> -->

            </div>
          </div>

        </div>
        <div class="form-group" style="width:50%">
          <input type="Submit" class="form-control bg bg-white " />
        </div>
      </form>

    </div>

  </div>
</template>

<script>
import axios from "../../../axios";
import SelectVue from "../../components/Field/Select.vue";
import TheCard from '../../components/Field/TheCard.vue'
import InputF from "../../components/Field/Input.vue";

export default {
    name: "ProductAdd",
    components: {
        TheCard,
        SelectVue,
      InputF,
    
    },
    data() {
        return {
            categories: [],
            sub_categories: [],
            fields: [{
                    label: "Product Name",
                    type: "text",
                    placeholder: "Enter your Product Name",

                },
                {
                    label: "Product Price",
                    type: "text",
                    placeholder: "Enter your Product Name",

                },
                {
                    label: "Product Quantity",
                    type: "text",
                    placeholder: "Enter your Product Name",

                },
            

            ]

        };
    },
    created() {
        axios.get("category").then(res => {
            this.categories = res.data.data;
        }).catch(err => console.error(err));
    },

    methods: {
        category(value) {
            axios.get("category/" + value)
                .then((res) => {
                    this.sub_categories = res.data.data;
                }).catch((err) => console.error(err));
        },
    },

};
</script>

<!-- v-on:input="(event) => this.$emit('sub_category', event.target.value)" -->
