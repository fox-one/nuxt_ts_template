import Vue from "vue";
import UIKit from "@foxone/uikit";

import type { Plugin } from "@nuxt/types";

import "@foxone/uikit/build/index.min.css";

const plugin: Plugin = ({ app }) => {
  Vue.use(UIKit);
  Vue.use(UIKit.Toast, app.vuetify, {
    top: false,
    centered: true,
  });
  Vue.use(UIKit.Dialog, app.vuetify, { flat: true });
};

export default plugin;
