import { NuxtConfig } from "@nuxt/types";
import i18n from "./src/i18n";

const config: NuxtConfig = {
  ssr: false,
  router: {
    mode: "history",
  },
  target: "static",
  srcDir: "./src",
  head: {
    title: "nuxt-ts-template-source",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt typescript template source",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://static.fox.one/font/inter/style.css",
      },
    ],
    script: [
      {
        src: "https://polyfill.io/v3/polyfill.min.js?features=Intl",
      },
    ],
  },
  loading: { color: "#fff" },
  css: ["~/styles/index.scss"],
  plugins: ["~/plugins/property.ts", "~/plugins/libs.ts", "~/plugins/persistedstate.ts"],
  buildModules: [
    "@nuxtjs/pwa",
    "@nuxtjs/eslint-module",
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
    "@nuxtjs/vuetify",
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "@nuxtjs/i18n", "@nuxtjs/sitemap"],
  i18n: {
    baseUrl: "https://pando.im",
    locales: [
      { code: "en", iso: "en-US" },
      { code: "es", iso: "es-ES" },
    ],
    defaultLocale: "en",
    vueI18n: i18n,
  },
  sitemap: {
    hostname: "https://pando.im",
    i18n: {
      locales: ["en", "es"],
    },
  },
  pwa: {
    manifest: {
      name: "Pando Product",
      short_name: "Pando",
      lang: "en",
      theme_color: "#FFF",
    },
  },
  vuetify: {
    customVariables: ["~/styles/variables.scss"],
    defaultAssets: false,
    treeShake: true,
    optionsPath: "./vuetify.options.ts",
  },
  build: {
    transpile: ["vuetify", "@foxone/uikit"],
  },
  env: {
    TOKEN: process.env.TOKEN || "",
    APP_ENV: process.env.APP_ENV || "",
  },
};

export default config;
