<template>
  <Tabbar>
    <Tabbaritem path="/home" activeColor="blue">
      <template #icon>
        <img src="@/assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #icon-active>
        <img src="@/assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #text> 首页 </template>
    </Tabbaritem>
    <Tabbaritem path="/profile" activeColor="red">
      <template #icon>
        <img src="../../assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #icon-active>
        <img src="../../assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #text> 个人 </template>
    </Tabbaritem>
    <Tabbaritem path="/category" activeColor="blue">
      <template #icon>
        <img src="../../assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #icon-active>
        <img src="../../assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #text> 分类 </template>
    </Tabbaritem>
    <Tabbaritem path="/cart" activeColor="blue">
      <template #icon>
        <img src="../../assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #icon-active>
        <img src="../../assets/img/tabbar/布丁.png" alt="" />
      </template>
      <template #text> 购物车 </template>
    </Tabbaritem>
  </Tabbar>
</template>

<script>
import Tabbar from "./Tabbar";
import Tabbaritem from "./Tabbaritem";
export default {
  components: {
    Tabbar,
    Tabbaritem,
  },
};
</script>

<style>
</style>