<template>
  <div class="tags">
    <template v-for="i of tags" :key="i">
      <span :class="i">{{ i }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    tags: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    // console.log("tags --", this.tags);
  },
};
</script>
