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
      <div class='txt'>keep moving just do what you want to do !!keep moving just do what you want to do !!keep moving just do what you want to do !!</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    name: "Home",
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less">
@import url("../assets/allCss/Home.less");
</style>
