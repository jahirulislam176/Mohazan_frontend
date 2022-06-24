<template>

    <nav class="user-tabs mb-4">
        <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
            <li class="nav-item">
                <a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pat_medical_records" data-toggle="tab"><span class="med-records">Medical
                        Records</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default{
    name:"DataTableHead"
}
</script>