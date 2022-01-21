<template>
  <b-container fluid="md" class="py-2">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="ชื่อบทความ" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="รายละเอียด" label-for="input-2">
        <b-form-textarea
          id="textarea"
          v-model="form.description"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-1" label="image url" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.imageurl"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="writer" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.writer"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "test",
        description: "lorem",
        imageurl: "https://picsum.photos/600/300/?image=25",
        writer: "frong",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit("sendData", this.form);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.description = "";
      this.form.imageurl = "";
      this.form.writer = "";
    },
  },
};
</script>

<style></style>
