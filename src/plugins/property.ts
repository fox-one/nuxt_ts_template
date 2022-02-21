/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from "@nuxt/types";
import utils from "@/utils";

declare module "vue/types/vue" {
  interface Vue {
    $utils: typeof utils;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $utils: typeof utils;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $utils: typeof utils;
  }
}

const plugin: Plugin = ({ app }, inject) => {
  inject("utils", utils);
};

export default plugin;
