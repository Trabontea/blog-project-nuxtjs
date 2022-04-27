<template>
  <div class="posts-page"><PostList :posts="loadedPosts" /></div>
</template>

<script>
// This component is loading in plugin before
//import PostList from "@/components/Posts/PostList";
export default {
  middleware: "log",

  // components: {
  //   PostList,
  // },

  // ***lifecycle method
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  //lifecycle method
  // created() {
  //   this.$store.dispatch("setPosts", this.loadedPosts);
  //   console.log("a", this.$store.getters.loadedPosts);
  // },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
