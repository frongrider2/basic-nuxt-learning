<template>
  <PostList :posts="loadData" />
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList,
  },
  computed: {
    loadData() {
      return this.$store.getters.getAllPost;
    },
  },
};
</script>

<style></style>
