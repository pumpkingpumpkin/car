<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    background-color:#f6f6f6;
    position:absolute;
    left:0;
    right:0;
  }

</style>
