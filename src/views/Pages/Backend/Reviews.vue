<template>
	<!-- Breadcrumb -->
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Reviews</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Reviews</h2>
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
					<div class="doc-review review-listing">

						<!-- Review Listing -->
						<ul class="comments-list">

							<ReviewList></ReviewList>
							</ul>
								<!-- /Comment List -->

					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
import ReviewList from '../../components/review/ReviewList.vue'
export default{
    name:"Reviews",
	components:{
		ReviewList
	}
}
</script>