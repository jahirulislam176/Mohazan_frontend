<template>
    <div class="">
        <div class="form-group">
            <label> {{ label}} </label>
            <input  class="form-control" :placeholder="placeholder" :type="type">
        </div>
    </div>

</template>
<script>
export default{
    name:"Input",
    props:[
         'label',
        'placeholder',
        'type'
]
}
</script>