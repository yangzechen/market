<template>
  <div class="tabbaritem" @click="itemclick">
    <slot v-if="isactive" name="icon"></slot>
    <slot v-else name="icon-active"></slot>
    <span :style="activeStyle" class="ac">
      <slot name="text"></slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /*  isactive: true, */
    };
  },
  //插槽传值和父组件传值相同
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      //默认为红色
      default: "red",
    },
  },
  computed: {
    isactive() {
      //找到等于1，没找到等于-1
      /* return this.$route.path.indexOf(this.path); */
      //直接判断返回true false
      return this.$route.path.includes(this.path);
      //比较
      /*  return this.$route.path == this.path; */
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {};
    },
  },

  methods: {
    itemclick() {
      this.$router.push(this.path);
      this.isactive = !this.isactive;
    },
  },
};
</script>

<style>
.tabbaritem {
  flex: 1;
  text-align: center;
  height: 49px;
  /* 49最合适 */
  line-height: 49px;
  background-color: #ccc;
}
.tabbaritem img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.ac {
  cursor: pointer;
}
</style>