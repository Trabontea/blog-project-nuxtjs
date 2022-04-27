import axios from "axios";
import Cookie from "js-cookie";

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .$get("/posts.json")
      .then((data) => {
        // transform an object to array
        const postsArray = [];
        for (const key in data) {
          postsArray.push({ ...data[key], id: key });
        }
        vuexContext.commit("setPosts", postsArray);
      })
      .catch((e) => context.error(e));
  },
  addPost(vuexContext, post) {
    const createdPost = { ...post, updatedDate: new Date() };
    return axios
      .post(
        "https://nuxt-blog-2a7b7-default-rtdb.europe-west1.firebasedatabase.app/posts.json?auth=" +
          vuexContext.state.token,
        createdPost
      )
      .then((result) => {
        console.log(result);
        vuexContext.commit("addPost", {
          ...createdPost,
          id: result.data.name,
        });
      })
      .catch((e) => console.log(e));
  },
  editPost(vuexContext, editedPost) {
    return axios
      .put(
        "https://nuxt-blog-2a7b7-default-rtdb.europe-west1.firebasedatabase.app/posts/" +
          editedPost.id +
          ".json?auth=" +
          vuexContext.state.token,
        editedPost
      )
      .then((res) => {
        console.log(res);
        vuexContext.commit("editPost", editedPost);
      })
      .catch((e) => console.log(e));
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit("setPosts", posts);
  },
  authenticateUser(vuexContext, authData) {
    // login url
    let authUrl =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      process.env.fbAPIKey;

    if (!authData.isLogin) {
      //change to sign up url
      authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        process.env.fbAPIKey;
    } else {
      authUrl =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
        process.env.fbAPIKey;
    }
    return this.$axios
      .$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then((result) => {
        console.log("result", result, result.idToken);
        vuexContext.commit("setToken", result.idToken);
        localStorage.setItem("token", result.idToken);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime + Number.parseInt(result.expiresIn) * 1000
        );
        // For server render
        Cookie.set("jwt", result.idToken);
        Cookie.set(
          "expirationDate",
          new Date().getTime + Number.parseInt(result.expiresIn) * 1000
        );
      })
      .catch((e) => console.log(e));
  },
  setLogoutTimer(vuexContext, duration) {
    setTimeout(() => {
      vuexContext.commit("clearToken");
    }, duration);
  },
  initAuth(vuexContext, req) {
    // Persisting the token across page refreshes
    let token;
    let expirationDate;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      // this is for the case when app rules on browser not on server, localstorage doesn't work on server
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    console.log("ahaha", new Date().getTime(), expirationDate);
    if (new Date().getTime() > +expirationDate || !token) {
      console.log("No token or invalid token");
      vuexContext.commit("clearToken");
      return;
    }
    vuexContext.commit("setToken", token);
  },
  logout(vuexContext) {
    vuexContext.commit("clearToken");
    Cookie.remove("token");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  },
};



