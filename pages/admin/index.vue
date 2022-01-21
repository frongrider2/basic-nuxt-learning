<template>
  <div class="my-2">
    <nuxt-link to="/admin/posts" class="btn btn-primary">ดูบทความ</nuxt-link>
    <nuxt-link to="/admin/posts/create" class="btn btn-primary"
      >เขียนบทความ</nuxt-link
    >
  </div>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  components: {
    PostList,
  },
};
</script>

<style></style>
