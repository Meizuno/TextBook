// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxtjs/mdc"],
  ignore: ["**/src-tauri/**"],
  css: ["~/assets/css/main.css"],
  ssr: false,

  app: {
    rootAttrs: {
      class: "h-full",
    },
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no viewport-fit=cover",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  imports: {
    dirs: ["database"],
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
