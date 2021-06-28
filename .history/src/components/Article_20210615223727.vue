<template>
  <div class="article" id="article">
    <i class="iconfont icon-sanhang" @click="showToc = true"> </i>
    <span class="title">
      <i class="iconfont icon-sanhang" @click="showToc = true"> </i>
    </span>
    <div class="tocSm" v-if="showToc">
      <i class="iconfont icon-guanbi" @click="showToc = false"></i>
      <div class="toc" @click="showToc = false">
        <template v-for="i of tocArr" :key="i.anchor">
          <a :href="'#' + i.anchor" v-if="i.level == 1" style="padding-left: 20px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 2" style="padding-left: 30px"> {{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 3" style="padding-left: 40px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 4" style="padding-left: 50px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 5" style="padding-left: 60px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 6" style="padding-left: 70px">{{ i.content }}</a>
        </template>
      </div>
    </div>
    <div class="tocLg">
      <div class="toc">
        <template v-for="i of tocArr" :key="i.anchor">
          <a :href="'#' + i.anchor" v-if="i.level == 1" style="padding-left: 20px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 2" style="padding-left: 30px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 3" style="padding-left: 40px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 4" style="padding-left: 50px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 5" style="padding-left: 60px">{{ i.content }}</a>
          <a :href="'#' + i.anchor" v-if="i.level == 6" style="padding-left: 70px">{{ i.content }}</a>
        </template>
      </div>
    </div>
    <div class="mdFile" id="mdFile">
      <div v-html="mdFile"></div>
      <el-backtop target="#mdFile" :visibility-height="100" :bottom="60">
        <i class="el-icon-caret-top"></i>
      </el-backtop>
    </div>
  </div>
</template>

<script>
import markdownIt from "markdown-it";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor";
// import { a } from "../getMdFile";
export default {
  name: "Article",
  components: {},
  props: {},
  data() {
    return {
      tocArr: [],
      mdFile: "",
      showToc: false,
    };
  },
  watch: {},
  computed: {},
  methods: {

  },
  created() {},
  mounted() {
    let url = "/" + this.$route.params.tab + "/" +this.$route.params.title +".md";
    console.log('url',url);
    
    this.$axios
      .get(url)
      .then((res) => {
        let self = this;
        this.mdFile = markdownIt({
          anchorLinkSymbol: " ",
        })
          .use(markdownItTocAndAnchor, {
            tocCallback: function (tocMarkdown, tocArray, tocHtml) {
              self.tocArr = tocArray;
              // console.log("tocArray", tocArray);
            },
          })
          .render(res.data);
        // console.log(" this.mdFile", this.mdFile);
      })
      .catch(function (err) {
        console.log("res from markdown file errror", err);
      })
      .then(function () {});
  },
};
</script>

<style lang="less">
@import url("../assets/allCss/Article.less");
</style>

