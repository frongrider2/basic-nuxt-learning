<template>
  <AdminForm @sendData="onSubmitted" />
</template>

<script>
import AdminForm from "@/components/admin/AdminForm.vue";
export default {
  components: { AdminForm },
  methods: {
    async onSubmitted(value) {
      this.$store.dispatch("addPost", value).then(() => {
        this.$router.push("/admin/posts");
      });
    },
  },
};
</script>

<style></style>
