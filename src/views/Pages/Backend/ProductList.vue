<template>
	<!-- Breadcrumb -->
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Product List</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Product List</h2>
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
					<div class="row row-grid">
						<div class="col-md-8 col-lg-6 col-xl-4">
							<div class="card widget-profile pat-widget-profile">
								<AllProduct></AllProduct>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import AllProduct from '../../components/product/ProductList.vue'
export default{
	name:"ProductList",
	components: {
	AllProduct
	}
}
</script>