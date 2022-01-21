<template>
  <b-col md-4>
    <b-card
      :title="title"
      :img-src="image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ content }}
      </b-card-text>
      <nuxt-link class="btn btn-success" :to="postLink">อ่านบทความ</nuxt-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: false,
    },
  },
  computed: {
    postLink() {
      return this.admin ? `/admin/post/${this.id}` : `/post/${this.id}`;
    },
  },
};
</script>

<style></style>
