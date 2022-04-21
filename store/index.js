import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log(context.req.session);
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "first post",
                previewText: "This is our first post!",
                thumbnail:
                  "https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270",
              },
              {
                id: "2",
                title: "Second post",
                previewText: "This is our Second post!",
                thumbnail:
                  "https://images.ctfassets.net/hrltx12pl8hq/4Gm9a6lQkjssolwXfpN1qV/2f45dc21404aac7b3b6e26b5c6827f7b/01-technology_1421446100.jpg?fit=fill&w=480&h=270",
              },
            ]);
            resolve();
          }, 1500);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};

export default createStore;
