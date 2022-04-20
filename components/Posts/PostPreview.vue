<template>
  <nuxt-link :to="'/posts/' + id">
    <article class="post-preview">
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: 'url(' + thumbnail + ')' }"
      ></div>

      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>
<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 100%;
  max-width: 320px;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: black;
  width: 100%;
  max-width: 320px;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

@media (min-width: 850px) {
  .post-preview,
  a {
    max-width: 320px;
    margin: 10px;
  }
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
  .post-preview,
  a {
    max-width: 360px;
  }
}
</style>
