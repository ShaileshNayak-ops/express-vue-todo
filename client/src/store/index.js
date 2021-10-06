import { createStore } from "vuex"
export default createStore({
  state: {
    currentUser: null,
    currentPassword: null,
  },
  mutations: {
    createCurrent(state, payload) {
      state.currentUser = payload.name
      state.currentPassword = payload.password
    },
    addTodo(state, payload) {
      fetch(
        `http://localhost:5000/postTodos?user=${state.currentUser}&content=${payload}`
      ).catch(console.error)
    },
    logOut(state) {
      state.currentUser = ""
      state.currentPassword = ""
    },
  },
  actions: {
    createUser(state, payload) {
      fetch(
        `http://localhost:5000/registerUser?name=${payload.name}&password=${payload.password}`
      ).catch(console.error)
    },
  },
  getters: {
    isLoggedIn(state) {
      if (state.currentUser != null && state.currentPassword != null) {
        return true
      } else {
        return false
      }
    },
    getCurrent(state) {
      return state
    },
  },
})
