<template>
<div class="card p-2" :class="classes">
    <div class="card-title p-0">
    </div>
    <div class="card-body p-3">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name: "TheCard",
    props: ["classes"]
}
</script>
