const state = () => ({
  appbar: {
    title: "",
    style: "",
    show: true,
    back: false,
    flat: true,
    align: "center",
  },

  settings: { dark: false },
});

const mutations = {
  SET_APPBAR(state, value) {
    const defaultValue = {
      title: "",
      style: "",
      show: true,
      back: true,
      flat: true,
      align: "center",
    };
    state.appbar = { ...defaultValue, ...value };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
