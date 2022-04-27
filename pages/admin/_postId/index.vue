<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";

export default {
  layout: "admin",
   middleware: ["check-auth", "auth"],
  components: {
    AdminPostForm,
  },
  // se foloseste cand vrem sa luam pe o pagina informatiile
  // postId vine din denumirea fisierului!!!!!! boule!!!
  asyncData(context) {
    console.log("context:::", context);
    return axios
      .get(
        "https://nuxt-blog-2a7b7-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          loadedPost: { ...res.data, id: context.params.postId },
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch("editPost", editedPost).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
