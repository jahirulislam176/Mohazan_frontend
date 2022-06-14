<template>
    <div class="col-md-12 col-lg-4">
        <div class="dash-widget dct-border-rht">
            <div class="circle-bar circle-bar1">
                <div class="circle-graph1" data-percent="75">
                    <img src="assets/img/icon-01.png" class="img-fluid" alt="patient">
                </div>
            </div>
            <div class="dash-widget-info">
                <h6>{{ alldata.title }}</h6>
                <h3>{{ alldata.total }}</h3>
                <p class="text-muted">Till Today</p>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"DashboardHeader",
    props:{
       alldata:Object
    }
    
}

</script>