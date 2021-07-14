<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data() {
        return {

        }
      },
      computed: {
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods: {
        itemClick() {
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    text-align: left;
    height:49px;
    font-size: 18px;
  }
</style>
