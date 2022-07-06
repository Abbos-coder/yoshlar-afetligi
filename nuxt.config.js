export default {
   target: "static",
   // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
      title: "Yoshlar Agentligi",
      htmlAttrs: {
         lang: "en",
      },
      meta: [
         { charset: "utf-8" },
         { name: "viewport", content: "width=device-width, initial-scale=1" },
         { hid: "description", name: "description", content: "" },
         { name: "format-detection", content: "telephone=no" },
      ],
      link: [
         { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
         {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
         },
      ],
      script: [
         {
            src:
               "https://rawgit.com/JulianLaval/canvas-particle-network/master/particle-network.min.js",
         },
      ],
   },

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: ["~/assets/styles/_main.scss", "~/assets/styles/_media.scss"],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [
      "~/plugins/aos.client.js",
      "~/plugins/swiper.client.js",
      "~/plugins/lightbox.js",
   ],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,
   loading: {
      color: "red",
      height: "4px",
   },

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: [],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/bootstrap
      "bootstrap-vue/nuxt",
      // https://go.nuxtjs.dev/axios
      "@nuxtjs/axios",
      "@nuxtjs/i18n",
   ],

   i18n: {
      useCookie: false,
      alwaysRedirect: true,
      locales: [
         {
            code: "en",
            iso: "en-US",
            name: "English",
            file: "en/index.js",
         },
         {
            code: "ru",
            iso: "ru-RU",
            name: "Russian",
            file: "ru/index.js",
         },
         {
            code: "uz",
            iso: "uz-UZ",
            name: "O'zbek",
            file: "uz/index.js",
         },
      ],
      lazy: true,
      seo: false,
      langDir: "locales/",
      defaultLocale: "uz",
      parsePages: false,
   },

   styleResources: {
      scss: ["~/assets/styles/*.scss"],
   },

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {},

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {},
};
