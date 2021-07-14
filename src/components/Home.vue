<template>
    <h2>
        <el-button type="info" @click="logout">退出</el-button>
    </h2>
</template>

<script>
    export default {
        methods:{
            logout(){
                window.sessionStorage.clear();
                this.$router.push("/login");
            }
        }
    }
</script>

<style scoped>

</style>