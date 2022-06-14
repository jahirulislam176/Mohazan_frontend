<template>
    <h4>Gender</h4>
    <div>
        <label class="custom_check">
            <input type="checkbox" name="gender_type" >
            <span class="checkmark"></span> Male Doctor
        </label>
    </div>

</template>
<script>
export default{
    name:"SelectBox",
    props: [
        'title',
        'label',
        'type'
    ]
}
</script>