import type { MutationTree } from "vuex";
import type { State, Mutations } from "./types";

const state = (): State => ({
  dark: false,
  toast: {
    show: false,
    message: "",
    color: "info",
  },
});

const mutations: MutationTree<State> & Mutations = {
  SET_TOAST(state, { message = "", color = "info", show = true }) {
    state.toast.show = show;
    state.toast.message = message;
    state.toast.color = color;
  },
};

export default { state, mutations };
