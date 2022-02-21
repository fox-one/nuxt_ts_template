import Vue from "vue";
import UIKit from "@foxone/uikit";

import "@foxone/uikit/build/index.min.css";

const plugin = ({ app }) => {
  Vue.use(UIKit);
  Vue.use(UIKit.Toast, app.vuetify, {
    top: false,
    centered: true,
  });
  Vue.use(UIKit.Dialog, app.vuetify, { flat: true });
};

export default plugin;
