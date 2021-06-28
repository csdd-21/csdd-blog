<template>
  <div class="filterCond">
    <div class="search">
      <el-input v-model="checked.title" placeholder="Type title or select tag below to search..."> </el-input>
      <el-button class="one" @click="handleSearch">查 询</el-button>
      <el-button @click="checked.title = ''">重 置</el-button>
    </div>
    <!-- 按标签 -->
    <span class="title">按标签 -- </span>
    <el-checkbox-group v-model="checked.tags">
      <el-checkbox-button v-for="i in tags" :label="i" :key="i">{{ i }}</el-checkbox-button>
    </el-checkbox-group>
    <!-- 按时间 -->
    <span class="title">按时间 -- </span> <br />
    <el-radio-group v-model="checked.sort">
      <el-radio-button label="1">正序</el-radio-button>
      <el-radio-button label="-1">倒序</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: "FilterCond",
  components: {},
  props: {
    tags: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      checked: {
        title: "",
        tags: [],
        sort: -1
      },
    };
  },
  watch: {
    "checked.tags": function (newVal, oldVal) {
      this.$emit("handleFilter", JSON.parse(JSON.stringify(this.checked)));
    },
  },
  computed: {},
  methods: {
    handleSearch() {
      this.$emit("handleFilter", JSON.parse(JSON.stringify(this.checked)));
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less">
@import url("../assets/allCss/FilterCond.less");
</style>
