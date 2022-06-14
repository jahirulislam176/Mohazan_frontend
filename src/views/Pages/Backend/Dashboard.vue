<template>
	<!-- Breadcrumb -->
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-12 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="index-2.html">Home</a></li>
							<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title">Dashboard</h2>
				</div>
			</div>
		</div>
	</div>
	<!-- /Breadcrumb -->

	<!-- Page Content -->
	<div class="content">
		<div class="container-fluid">

			<div class="row">


				<div class="col-md-7 col-lg-8 col-xl-12">

					<div class="row">
						<div class="col-md-12">
							<div class="card dash-card">
								<div class="card-body">
									<div class="row">
										<DashboardHeader :alldata="values" />

									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="card">
						<div class="card-body pt-0">

							<!-- Tab Menu -->
							<DataTableHead></DataTableHead>
							<!-- /Tab Menu -->

							<!-- Tab Content -->
							<div class="tab-content pt-0">

								<!-- Appointment Tab -->
								<div id="pat_appointments" class="tab-pane fade show active">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Doctor</th>
															<th>Appt Date</th>
															<th>Booking Date</th>
															<th>Amount</th>
															<th>Follow Up</th>
															<th>Status</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<h2 class="table-avatar">
																	<a href="doctor-profile.html"
																		class="avatar avatar-sm mr-2">
																		<img class="avatar-img rounded-circle"
																			src="assets/img/doctors/doctor-thumb-01.jpg"
																			alt="User Image">
																	</a>
																	<a href="doctor-profile.html">Dr. Ruby Perrin
																		<span>Dental</span></a>
																</h2>
															</td>
															<td>14 Nov 2019 <span class="d-block text-info">10.00
																	AM</span></td>
															<td>12 Nov 2019</td>
															<td>$160</td>
															<td>16 Nov 2019</td>
															<td><span
																	class="badge badge-pill bg-success-light">Confirm</span>
															</td>
															<td class="text-right">
																<div class="table-action">
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="far fa-eye"></i> View
																	</router-link>
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="fas fa-print"></i> Print
																	</router-link>
																</div>
															</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<!-- /Appointment Tab -->

								<!-- Prescription Tab -->
								<div class="tab-pane fade" id="pat_prescriptions">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Date </th>
															<th>Name</th>
															<th>Created by </th>
															<th></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>14 Nov 2019</td>
															<td>Prescription 1</td>
															<td>
																<h2 class="table-avatar">
																	<a href="doctor-profile.html"
																		class="avatar avatar-sm mr-2">
																		<img class="avatar-img rounded-circle"
																			src="assets/img/doctors/doctor-thumb-01.jpg"
																			alt="User Image">
																	</a>
																	<a href="doctor-profile.html">Dr. Ruby Perrin
																		<span>Dental</span></a>
																</h2>
															</td>
															<td class="text-right">
																<div class="table-action">
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="far fa-eye"></i> View
																	</router-link>
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="fas fa-print"></i> Print
																	</router-link>
																</div>
															</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<!-- /Prescription Tab -->

								<!-- Medical Records Tab -->
								<div id="pat_medical_records" class="tab-pane fade">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>ID</th>
															<th>Date </th>
															<th>Description</th>
															<th>Attachment</th>
															<th>Created</th>
															<th></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><a href="javascript:void(0);">#MR-0010</a></td>
															<td>14 Nov 2019</td>
															<td>Dental Filling</td>
															<td><a href="#">dental-test.pdf</a></td>
															<td>
																<h2 class="table-avatar">
																	<a href="doctor-profile.html"
																		class="avatar avatar-sm mr-2">
																		<img class="avatar-img rounded-circle"
																			src="assets/img/doctors/doctor-thumb-01.jpg"
																			alt="User Image">
																	</a>
																	<a href="doctor-profile.html">Dr. Ruby Perrin
																		<span>Dental</span></a>
																</h2>
															</td>
															<td class="text-right">
																<div class="table-action">
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="far fa-eye"></i> View
																	</router-link>
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="fas fa-print"></i> Print
																	</router-link>
																</div>
															</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<!-- /Medical Records Tab -->

								<!-- Billing Tab -->
								<div id="pat_billing" class="tab-pane fade">
									<div class="card card-table mb-0">
										<div class="card-body">
											<div class="table-responsive">
												<table class="table table-hover table-center mb-0">
													<thead>
														<tr>
															<th>Invoice No</th>
															<th>Doctor</th>
															<th>Amount</th>
															<th>Paid On</th>
															<th></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<a href="invoice-view.html">#INV-0010</a>
															</td>
															<td>
																<h2 class="table-avatar">
																	<a href="doctor-profile.html"
																		class="avatar avatar-sm mr-2">
																		<img class="avatar-img rounded-circle"
																			src="assets/img/doctors/doctor-thumb-01.jpg"
																			alt="User Image">
																	</a>
																	<a href="doctor-profile.html">Ruby Perrin
																		<span>Dental</span></a>
																</h2>
															</td>
															<td>$450</td>
															<td>14 Nov 2019</td>
															<td class="text-right">
																<div class="table-action">
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="far fa-eye"></i> View
																	</router-link>
																	<router-link :to="{ name:'InvoiceView'}"
																		class="btn btn-sm bg-info-light"> <i
																			class="fas fa-print"></i> Print
																	</router-link>



																</div>
															</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								<!-- /Billing Tab -->

							</div>
							<!-- Tab Content -->


							<!-- Tab Content -->

						</div>
					</div>
				</div>

			</div>

		</div>
	</div>

</template>

<script>
import CustomerDetails from "../../components/customer/CustomerDetails.vue";
import DashboardHeader from "../../components/customer/DashboardHeader.vue";
import DataTableHead from "../../components/dataTable/DataTableHead.vue";
export default{
    name: "Dashboard",
    components: { CustomerDetails, DashboardHeader,DataTableHead},
	data(){
		return{
			values:{
			   title: "Total Customer",
				total: 1500
			}

		}
	}
}

</script>