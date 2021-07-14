<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar{
        display: flex;
        height:44px;
    }
    .left{
        width: 160px;
        background-color:#f6f6f6;
    }
    .center{
        flex:1;
        background-color: blue;
    }
</style>