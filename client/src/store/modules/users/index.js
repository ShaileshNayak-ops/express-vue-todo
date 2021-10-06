export default {
  actions: {
    createUser(state, userName, password) {
      fetch(
        `http://localhost:5000/registerUser?name=${userName}&password=${password}`
      ).catch(err => console.error(error))
    }
  }
}
