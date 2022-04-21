<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <h3 class="post-content">{{ loadedPost.previewText }}</h3>
      <div class="post-details">
        <div class="post-detail">{{ loadedPost.updatedDate }}</div>
        <div class="post-detail">{{ loadedPost.content }}</div>
      </div>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: "1",
            title: "First Post (ID: " + context.params.id + ")",
            previewText: "This is our first post!",
            author: "daniel",
            updatedDate: new Date(),
            content: "Some dummy test which is definitely not the good test",
            thumbnail:
              "https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270",
          },
        });
      }, 1000);
    })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        context.error(e);
      });
  },
};
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
