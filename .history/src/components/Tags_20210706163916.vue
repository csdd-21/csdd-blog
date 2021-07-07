<template>
  <div class="tags">
    <template v-for="i of tags" :key="i.name">
      <span :class="i.class">{{ i.name }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "Tags",
  props: {
    tags: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="less">
@import url("../assets/allCss/Tags.less");
</style>
