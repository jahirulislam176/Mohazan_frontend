<template>
<label for="">{{Label}}</label>
<select class="form-control" v-bind:key="category" v-on:input="(event) => this.$emit('value', event.target.value)" :style="styles">
    <option class="text-center">--All--</option>
    <option v-for="row in options" v-bind:key="row.id" v-bind:value="row.slug">
        {{ row.name }}
    </option>
</select>
</template>

<script>
export default {
    name: "Select",
    props: ['options', 'Label', 'styles'],
}
</script>
