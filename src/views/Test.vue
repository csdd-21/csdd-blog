<template>
  <div id="content" class="page">
    <div class="header"></div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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

<style lang='less' scoped>
.page {
  position: relative;
  min-height: 100%;
  padding-bottom: 80px;
  .header {
    height: 50px;
    background-color: dodgerblue;
  }
  .main {
    height: 80px;
    width: 100%;
    background-color: gray;
  }

  .footer {
    height: 50px;
    background-color: #19212a;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
</style>
