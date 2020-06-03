import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  ;(window as any).onNuxtReady(() => {
    createPersistedState({
      key: 'vuex',
      paths: ['auth']
    })(store)
  })
}
