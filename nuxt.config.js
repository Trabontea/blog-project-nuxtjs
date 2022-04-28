const bodyParser = require("body-parser");
export default {
  //mode: "spa", // nu mai e in version 2
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "WD Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "A blog" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Open+Sans",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3B8070" },
  loadingIndicator: {
    name: "circle",
    color: "orange",
  },

  /*
   ** Global CSS
   */
  css: ["@/assets/styles/main.css"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/core-components.js", "@/plugins/date-filter.js"],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      "https://nuxt-blog-2a7b7-default-rtdb.europe-west1.firebasedatabase.app",
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-2a7b7-default-rtdb.europe-west1.firebasedatabase.app",
    fbAPIKey: "AIzaSyARM8qS-DdhNNoqYBTPHo5Ik8RjZXqsy9I",
  },
  transition: {
    name: "page",
    mode: "out-in",
  },
  serverMiddleware: [bodyParser.json(), "~/api"],
  // router: {
  //   middleware: "log",
  // },
};
