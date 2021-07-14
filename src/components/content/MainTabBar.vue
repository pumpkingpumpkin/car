<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/system" activeColor="blue">
      <div slot="item-text">系统配置</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../components/common/tabbar/TabBar";
  import TabBarItem from "../../components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
    }
</script>

<style scoped>

</style>
