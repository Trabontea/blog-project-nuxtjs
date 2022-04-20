<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270"
      title="Hello There"
      previewText="Preview text"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270"
      title="Hello There 1"
      previewText="Preview text 1"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270"
      title="Hello There 2"
      previewText="Preview text 2"
    />
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
