<template>

    <div class="col-md-7 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-body">

                <!-- Profile Settings Form -->
                <form>
                    <div class="row form-row">
                        <div class="col-12 col-md-12">
                            <div class="form-group">
                                <div class="change-avatar">
                                    <div class="profile-img">
                                        <img src="assets/img/patients/patient.jpg" alt="User Image">
                                    </div>
                                    <div class="upload-img">
                                        <div class="change-photo-btn">
                                            <span><i class="fa fa-upload"></i> Upload Photo</span>
                                            <input type="file" class="upload">
                                        </div>
                                        <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of
                                            2MB</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                       

                        <InputF v-for="field in fields" :key="field.id" :label="field.label"
                            :placeholder="field.placeholder" :type="field.type" class="col-md-4">
                        </InputF>
                    </div>
                    <div class="submit-section">
                        <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                    </div>
                </form>
                <!-- /Profile Settings Form -->

            </div>
        </div>
    </div>


    <!-- /Page Content -->
</template>
<script>
import InputF from '../../components/Field/Input.vue';
import SelectBox from '../../components/Field/Category.vue';
import axios from "../../../axios";
export default{
    name: "ProfileSetting",
    components: { InputF, SelectBox },
    data() {
        return {
            fields: [
                {
                label: "Firs Name",
                placeholder: "Enter Your First Name",
                type: "text"
            }, {
                    label: "Last Name",
                    placeholder: "Enter Your Last Name",
                    type: "text"
                }, {
                    label: "Date of Birth",
                    placeholder: "Enter Your Date of Birth",
                    type: "date"
                }, {
                    label: "Address",
                    placeholder: "Enter Your Address",
                    type: "text"
                }, {
                    label: "City",
                    placeholder: "Enter Your City",
                    type: "text"
                }, {
                    label: "State",
                    placeholder: "Enter Your State",
                    type: "text"
                }, {
                    label: "County",
                    placeholder: "Enter Your County",
                    type: "text"
                }
             
                ]
        }
    },
    // created() {
    //     axios.get(`fields`).then(res => {
    //         this.fields = res.data.data;
    //         // console.log(res.data.data)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // },
    // data(){
    //    return{ fields:[]
    //     }
    // }
}
</script>