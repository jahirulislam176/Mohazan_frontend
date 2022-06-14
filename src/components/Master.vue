<template>

<Header></Header>
    <router-view></router-view>
<Footer></Footer>

</template>


<script>
import Header from './pageLayout/Header.vue'
import Footer from './pageLayout/Footer.vue'

export default{
components:{Header,Footer},
name:"Master"
}
</script>