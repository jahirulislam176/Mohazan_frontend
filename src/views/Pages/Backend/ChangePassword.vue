<template>
    <div class="col-md-7 col-lg-8 col-xl-9">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12 col-lg-6">

                        <!-- Change Password Form -->
                        <form>
                            <InputF v-for="field in fields" :key="field.id" :label="field.label"
                                :placeholder="field.placeholder" :type="field.type" class="col-md-12 m-auto">
                            </InputF>
                         
                            <div class="submit-section">
                                <InputF v-for="field in fields1"  :key="field.id" :type="field.type"></InputF>
                                <!-- <SubmitButton></SubmitButton> -->
                            </div>
                        </form>
                        <!-- /Change Password Form -->

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
// import Input from '../../components/Field/Input'
import InputF from '../../components/Field/Input.vue';
import SubmitButton from '../../components/partials/SubmitButton.vue';
export default{
    name: "ChangePassword",
    components: {
     InputF, SubmitButton },
    data(){
        return{
            fields:[
                {
                    label: "Enter Old Password",
                    placeholder: "Enter Your Old Password",
                    type: "password"
                }, {
                    label: "Create New Password",
                    placeholder: "Create New Password",
                    type: "password"
                }, {
                    label: "Confirm Password",
                    placeholder: "Confirm Password",
                    type: "password"
                }
            ],
            fields1:[
                { type: "submit" }
            ]
             
            
        }
    }
}
</script>