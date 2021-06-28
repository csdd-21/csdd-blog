<template>
  <div class="about">
    <div class="content" v-html="postHtml"></div>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
  components: {
    name: "About",
  },
  props: {},
  data() {
    return {
      postHtml: "",
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.$axios
      .get("/about/about.md")
      .then((res) => {
        this.postHtml = new MarkdownIt({ html: true }).render(res.data);
      })
      .catch(function (err) {})
      .then(function () {});
  },
};
</script>
