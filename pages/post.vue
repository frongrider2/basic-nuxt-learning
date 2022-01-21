<template>
  <b-container fluid>
    <Header />
    <PostList :posts="loadData" />
  </b-container>
</template>

<script>
import Header from "@/components/posts/Header";
import PostList from "@/components/posts/PostList";
import axios from "axios";
import env from "@/plugins/env";

export default {
  components: {
    Header,
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
