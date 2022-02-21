import UIKit from "@foxone/uikit";
import { mergeDeep } from "vuetify/lib/util/helpers";

export default function({ store }) {
  const isDark = store.state.app.settings.dark;

  const options = {
    theme: {
      dark: isDark,
      themes: {
        light: {},
        dark: {},
      },
    },
  };

  return mergeDeep(UIKit.preset, options);
}
