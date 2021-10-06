<template>
  <div>
    <form class="container mt-5 w-50" @submit.prevent="addUser()">
      <h1>Sign Up</h1>
      <input
        type="text"
        class="form-control"
        placeholder="Type Your user name..."
        v-model="signName"
      />
      <input
        type="text"
        class="form-control my-2"
        placeholder="Type your Password..."
        v-model="signPassword"
      />
      <button class="btn btn-secondary" type="submit">
        Submit
      </button>
      <button class="btn btn-secondary" style="margin-left: 5px;" type="reset">
        Reset
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const signName = ref("")
    const signPassword = ref("")
    const addUser = () => {
      if (signName.value != "" && signPassword.value != "") {
        store.dispatch("createUser", {
          name: signName.value,
          password: signPassword.value
        })
        alert(`Successfully created user: ${signName.value}`)
        signName.value = ""
        signPassword.value = ""
      } else {
        alert("You Must Specify Username And Password")
      }
    }
    return {
      signName,
      signPassword,
      addUser
    }
  }
}
</script>

<style></style>
