<template>
  <div class="home">
    <el-container>
      <img class="sm" src="../assets/home.jpg" alt="homeImg" />
      <img class="lg" src="../assets/home.jpg" alt="homeImg" />
    </el-container>
    <div class="wrapper">
      <div class="loader">
        <div class="loader-inner ball-scale-ripple-multiple">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="txt">This is test Word This is test Word This is test Word This is test Word This is test Word This is test Word</div>
    </div>
  </div>
</template>

<script>
import {  mapMutations } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapMutations(["SET_SHOW_FOOTER"]),
  },
  created() {},
  mounted() {
     this.SET_SHOW_FOOTER({ showFooter: false });
  },
};
</script>

<style lang="less">
@import url("../assets/allCss/Home.less");
</style>
