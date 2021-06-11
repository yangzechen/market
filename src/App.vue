<template>
  <div id="app">
    <maintabbar></maintabbar>
    <router-view />
  </div>
</template>
<script>
import Maintabbar from "./components/tabbar/Maintabbar";
export default {
  name: "app",
  components: {
    Maintabbar,
  },
};
</script>

<style>
/* 引入css代码 style中引用*/
@import "./assets/css/base.css";
</style>
