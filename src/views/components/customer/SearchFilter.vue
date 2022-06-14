<template>

    <div class="card search-filter">
        <div class="card-header">
            <h4 class="card-title mb-0">Search Filter</h4>
        </div>
        <div class="card-body">
            <div class="filter-widget mt-0">
                <InputF v-for="field in fields" :key="field.id" :label="field.label" :placeholder="field.placeholder"
                    :type="field.type" class="col-md-12 m-auto">
                </InputF>
                <!-- <div class="cal-icon">
                                    <input type="text" class="form-control datetimepicker" placeholder="Select Date">
                                </div> -->
            </div>
            <div class="filter-widget">
                <!-- <SelectBox :type="checkbox" ></SelectBox> -->
                <h4>Gender</h4>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="gender_type" checked>
                        <span class="checkmark"></span> Male Doctor
                    </label>
                </div>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="gender_type">
                        <span class="checkmark"></span> Female Doctor
                    </label>
                </div>
            </div>
            <div class="filter-widget">
                <h4>Select Specialist</h4>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="select_specialist" checked>
                        <span class="checkmark"></span> Urology
                    </label>
                </div>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="select_specialist" checked>
                        <span class="checkmark"></span> Neurology
                    </label>
                </div>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="select_specialist">
                        <span class="checkmark"></span> Dentist
                    </label>
                </div>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="select_specialist">
                        <span class="checkmark"></span> Orthopedic
                    </label>
                </div>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="select_specialist">
                        <span class="checkmark"></span> Cardiologist
                    </label>
                </div>
                <div>
                    <label class="custom_check">
                        <input type="checkbox" name="select_specialist">
                        <span class="checkmark"></span> Cardiologist
                    </label>
                </div>
            </div>
            <div class="btn-search">
                <button type="button" class="btn btn-block">Search</button>
            </div>
        </div>
    </div>

</template>
<script>
import InputF from '../../components/Field/Input.vue';
export default{
    name:"SearchFilter",
    components:{
        InputF
    }, data() {
        return {
            fields: [
                {
                    label: "Search By Date",
                    placeholder: "Select Date",
                    type: "date"
                }
            ]
        }
    }
}

</script>