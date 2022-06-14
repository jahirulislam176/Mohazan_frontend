<template>
	<!-- Breadcrumb -->
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Invoices</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Invoices</h2>
				</div>
			</div>
		</div>
	</div>
	<!-- /Breadcrumb -->

	<!-- Page Content -->
	<div class="content">
		<div class="container-fluid">

			<div class="row">

				<div class="col-md-12 col-lg-8 col-xl-9">
					<div class="card card-table">
						<div class="card-body">

							<!-- Invoice Table -->
							<Payment>
							</Payment>

						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
	<!-- /Page Content -->

</template>
<script>
import Payment from '../../components/invoice/CustomerInvoice.vue'
export default{
    name:"Invoices",
	components:{
	   Payment
	}
}
</script>