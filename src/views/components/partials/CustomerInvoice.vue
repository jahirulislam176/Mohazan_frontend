<template>
    <div class="table-responsive">
        <table class="table table-hover table-center mb-0">
            <thead>
                <tr>
                    <th>Invoice No</th>
                    <th>Patient</th>
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
                            <a href="patient-profile.html" class="avatar avatar-sm mr-2">
                                <img class="avatar-img rounded-circle" src="assets/img/patients/patient.jpg"
                                    alt="User Image">
                            </a>
                            <a href="patient-profile.html">Richard Wilson <span>#PT0016</span></a>
                        </h2>
                    </td>
                    <td>$450</td>
                    <td>14 Nov 2019</td>
                    <td class="text-right">
                        <div class="table-action">
                            <router-link :to="{name:'InvoiceView'}"> <i class="far fa-eye"></i> View</router-link>
                            <!-- <a href="invoice-view.html" class="btn btn-sm bg-info-light">
                                <i class="far fa-eye"></i> View
                            </a> -->
                            <router-link :to="{name:'InvoiceView'}"> <i
                                    class="fas fa-print"></i> Print</router-link>
                            
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
export default{
name:"Payment"
}

</script>