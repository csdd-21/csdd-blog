<template>
  <div class="study">
    <div class="contentWrapper col-xs-12">
      <!-- <FilterCond class="filter col-xs-12 col-md-8" :tab="{ parent: 'study' }"></FilterCond> -->
      <div :style="study.datas.length == 0 ? empty.show : empty.hide">{{ empty.info }}</div>
      <div class="content col-xs-12 col-md-8" v-for="(i, index) of study.datas" :key="index" @click="clickArticle(i)">
        <div>
          <div class="info">
            <div class="col-xs-12">
              <b> {{ i.title }} </b>
              <Tags :tags="i.tags"></Tags>
              <span class="desc">{{ i.abstracts }} </span>
              <div class="read">
                <span>{{ i.createdDate }} </span>
                <span>Read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page col-xs-12 col-md-8" :key="page.skip">
        <el-pagination layout="prev, next, jumper" :total="study.total" :current-page="page.skip" :page-size="page.limit" @current-change="handleCurrentPage"> </el-pagination>
        <span class="total"> / 共 {{ Math.ceil(study.total / page.limit) }} 页</span>
      </div>
    </div>
    <router-view :key="routerKey" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import FilterCond from "@/components/FilterCond";
import Tags from "@/components/Tags";
export default {
  name: "Study",
  components: {
    FilterCond,
    Tags,
  },
  props: {},
  data() {
    return {
      routerKey: "",
      empty: {
        info: "there is no data for Study page, please check the database or network !",
        show: {
          display: "block",
          "text-align": "center",
          "margin-top": "200px",
        },
        hide: {
          display: "none",
        },
      },
    };
  },
  watch: {
    routerKey(val) {
      return this.$route.path + Date.now();
    },
  },
  computed: {
    ...mapState({
      study: (state) => state.study.res,
      page: (state) => state.study.req,
    }),
  },
  methods: {
    ...mapMutations(["SET_PARAMS", "SET_PARAMS_DEFAULT", "SET_SHOW_FOOTER"]),
    ...mapActions(["getTags", "getArticles"]),

    clickArticle(i) {
      this.$router.push({ name: "article", params: { tab: "study", title: i.title } });
      this.SET_SHOW_FOOTER({ showFooter: false });
    },

    handleCurrentPage(val) {
      this.SET_PARAMS({ parent: "study", skip: val });
      this.getArticles("study");
    },
  },
  created() {},
  mounted() {
    this.getTags("study");
    this.getArticles("study");
    this.SET_SHOW_FOOTER({ showFooter: true });
  },
  unmounted() {
    this.SET_PARAMS_DEFAULT("study");
  },
};
</script>

<style lang="less">
@import url("../assets/allCss/Study.less");
</style>
