// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Zachary Mayhew",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.scss"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
});
