import Vue, { VNode } from "vue";
import { Component } from "vue-property-decorator";
import dayjs from "dayjs";

export interface Page extends Vue {
  title: string | VNode | any;
  htmlTitle?: string;
  shortDesc?: string;
  desc?: string;
  jsonLd?: any;
  setLang: () => void;
  setJsonLd: () => void;
  setPageConfig: () => void;
}

@Component({
  head() {
    const vm = this as Page;
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: `${vm.htmlTitle || vm.title} - ${vm.shortDesc}`,
      meta: [
        {
          hid: "theme-color",
          name: "theme-color",
          content: vm.$store.state.app.appbar.color || (vm.$store.state.app.dark ? "#000000" : "#FFFFFF"),
        },
        {
          hid: "description",
          name: "description",
          content: vm.desc,
        },
        {
          hid: "og:title",
          name: "og:title",
          title: vm.htmlTitle || vm.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: vm.desc,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          title: vm.htmlTitle || vm.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: vm.desc,
        },
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    } as any;
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm: any) => {
      vm.setJsonLd();
      vm.setPageConfig();
    });
  },
})
export default class PageView extends Vue {
  get title() {
    return "";
  }

  get desc() {
    return "";
  }

  get shortDesc() {
    return "";
  }

  get jsonLd() {
    return {};
  }

  get appbar() {
    return { back: true };
  }

  get bottomNav() {
    return "";
  }

  get breadCrumb() {
    return null;
  }

  get sidebarNav() {
    return "";
  }

  setJsonLd() {
    this.$store.commit("app/SET_JSONLD", this.jsonLd || {});
  }

  setPageConfig() {
    const freshworkLauncher: any = document.querySelector("#launcher-frame");
    if (freshworkLauncher) {
      if (this.$route.name !== "index") {
        freshworkLauncher.style.display = "none";
      } else {
        freshworkLauncher.style.display = "block";
      }
    }

    this.$store.commit("app/SET_APPBAR", { title: this.title, ...this.appbar });
  }
}
