<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>
<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Daniel",
        title: "My awsome post",
        content: "Content for the post ",
        thumbnailLink:
          "https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270",
      },
    };
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
