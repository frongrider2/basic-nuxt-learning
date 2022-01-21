<template>
  <b-container fluid>
    <b-row class="py-2 flex-wrap">
      <PostContent
        v-for="post in posts"
        :id="post.id"
        :title="post.title"
        :content="post.description"
        :image="post.imageurl"
        :isAdmin="isAdmin"
        :key="post.id"
      />
    </b-row>
  </b-container>
</template>

<script>
import PostContent from "@/components/posts/PostContent";

export default {
  components: {
    PostContent,
  },
  props: {
    isAdmin: {
      type: {
        type: Boolean,
        require: false,
      },
    },
    posts: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style></style>
