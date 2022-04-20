<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>

    <section class="featured-posts">
      <PostPreview
        id="1"
        thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270"
        title="Hello There"
        previewText="Preview text"
      />
      <PostPreview 
        id="2"
        thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270"
        title="Hello There 1"
        previewText="Preview text 1"
      />
      <PostPreview 
         id="3"
        thumbnail="https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270"
        title="Hello There 2"
        previewText="Preview text 2"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
