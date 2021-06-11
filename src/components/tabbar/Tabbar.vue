<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#tabbar {
  position: fixed;
  display: flex;
  bottom: 50px;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 10px rgb(0, 0, 0, 0.3);
}
</style>