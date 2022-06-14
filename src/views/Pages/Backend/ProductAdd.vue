<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-7">
                <form>
                    <div class="form-control bg bg-primary">
                        <h3 class="text-center">Product Add Form</h3>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select Category</label>
                        <select class="form-control" @change="category($event)" v-bind:key="category">
                            <option>--select--</option>
                            <option v-for="row in categories" v-bind:key="row.id" v-bind:value="row.id">{{ row.name }}
                            </option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select SubCategory</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>--select--</option>
                            <option>2</option>

                        </select>
                    </div>

                    <div class="form-group">
                        <label>Product Name</label>
                        <input type="text" class="form-control" placeholder="Enter Product Name">
                    </div>
                    <div class="form-group">
                        <label>Product Price</label>
                        <input type="text" class="form-control" placeholder="Enter Product Price">
                    </div>

                    <div class="form-group">
                        <label>Product Quantity</label>
                        <input type="text" class="form-control" placeholder="Enter Product Quantity">
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Product Details</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group ">

                        <input type="Submit" class="form-control bg bg-primary">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name:"ProductAdd",
     methods: {
        read() {
            axios.get("category/categories").then(res => {
                this.categories = res.data.data;
            }).catch((err) => console.error(err));
            axios.get("search", {
                // params: {
                //     sub_category_id: event.target.value
                // }
            }).then(res => {
                this.products = res.data.data;
            }).catch((err) => console.error(err));
        },
        category(event) {
            axios.get("category/sub-categories", {
                params: {
                    category_id: event.target.value
                }
            }).then(res => {
                this.sub_categories = res.data.data;
            }).catch((err) => console.error(err));
        },
        search(event) {
            axios.get("search", {
                params: {
                    sub_category_id: event.target.value
                }
            }).then(res => {
                this.products = res.data.data;
            }).catch((err) => console.error(err));
        },
    },
    mounted() {
        this.read();
    },
}

</script>