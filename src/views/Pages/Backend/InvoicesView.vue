<template>
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-12 col-12">
                    <nav aria-label="breadcrumb" class="page-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Invoice View</li>
                        </ol>
                    </nav>
                    <h2 class="breadcrumb-title">Invoice View</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->
    <ViewInvoice></ViewInvoice> <!-- Page Content -->

        <!-- /Page Content -->
</template>
<script>
import ViewInvoice from '../../components/invoice/ViewInvoice.vue'
export default{
    name:"InvoicesView",
    components:{
        ViewInvoice
    }
}
</script>