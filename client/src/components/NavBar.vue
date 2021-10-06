<template>
  <nav class="bg-dark text-white p-2">
    <span class="nav__message">
      <h1>Todo App</h1>
    </span>
    <span class="nav__welcome">
      <router-link
        to="/login"
        class="btn btn-outline-primary"
        style="margin-right: 5px"
        >Login</router-link
      >
      <button @click="logOut()" class="btn btn-outline-primary">Log Out</button>
    </span>
  </nav>
</template>
<style>
nav {
  display: flex;
}
.nav__message {
  justify-content: center;
  align-items: center;
}
.nav__welcome {
  margin-left: auto;

  font-size: 2rem;
}
.nav__notLoggedIn {
  margin-left: auto;
  margin-top: 5px;
}
</style>
<script>
import { computed, onMounted, ref } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
export default {
  setup() {
    const store = useStore()
    const route = useRouter()
    const isLoggedIn = computed(() => store.getters.isLoggedIn)
    const logOut = () => {
      console.log(store.state)
      if (store.state.currentUser != null) {
        store.commit("logOut")
        route.push("/")
      } else {
        alert("You Must Login To Logout")
      }
    }
    return {
      isLoggedIn,
      logOut,
    }
  },
}
</script>
