<template>
  <div>
    <div v-if="isLoggedIn" class="container w-50">
      <TodoForm />
      <TodoList />
    </div>
    <div v-else>
      <NotLoggedIn />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import NotLoggedIn from "../components/NotLoggedIn.vue"
import TodoForm from "../components/TodoForm.vue"
import TodoList from "../components/TodoList.vue"
export default {
  setup() {
    const store = useStore()
    return {
      isLoggedIn: store.getters.isLoggedIn,
      user: store.state.currentUser,
    }
  },
  components: {
    NotLoggedIn,
    TodoForm,
    TodoList,
  },
}
</script>

<style></style>
