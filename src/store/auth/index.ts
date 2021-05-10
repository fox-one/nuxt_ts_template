import type { GetterTree, MutationTree } from "vuex";
import type { State, Mutations } from "./types";
import type { RootState } from "../types";

import { GetterTypes } from "./types";

const state: State = {
  token: "",
};

const getters: GetterTree<State, RootState> = {
  [GetterTypes.IS_LOGGED]() {
    return Boolean(state.token);
  },
};

export const mutations: MutationTree<State> & Mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

export default {
  state,
  getters,
};
