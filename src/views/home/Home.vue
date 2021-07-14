<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="left">应用管理</div></nav-bar>
    <search/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  // import Search from "./search/Search";

  export default {
    name: "Home",
    components:{
      NavBar,
      // Search
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #f6f6f6;
    color:#2c3e50;
  }
</style>
