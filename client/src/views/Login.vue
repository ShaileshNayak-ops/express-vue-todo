<template>
  <div>
    <form class="container mt-5 w-50" @submit.prevent="login()">
      <h1>Login</h1>
      <input
        type="text"
        class="form-control"
        placeholder="Type Your user name..."
        v-model="username"
      />
      <input
        type="password"
        class="form-control my-2"
        placeholder="Type your Password..."
        v-model="password"
      />
      <button class="btn btn-secondary" type="submit">Submit</button>
      <button class="btn btn-secondary" style="margin-left: 5px" type="reset">
        Reset
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { Toast } from "bootstrap"
export default {
  setup() {
    const username = ref("")
    const password = ref("")
    const route = useRouter()
    const store = useStore()
    const login = () => {
      fetch(
        `http://localhost:5000/hasUser?name=${username.value}&password=${password.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.data === true) {
            route.push("/todo")
            store.commit("createCurrent", {
              name: username.value,
              password: password.value,
            })
            username.value = ""
            password.value = ""
          } else {
            alert("Invalid Input")
          }
        })
    }
    return {
      username,
      password,
      login,
    }
  },
}
</script>

<style></style>
