<template>
  <form class="mt-5" @submit.prevent="addTodo()">
    <input
      type="text"
      class="form-control"
      placeholder="Type A Todo..."
      v-model="newTodo"
    />
    <input type="submit" class="btn btn-outline-secondary mt-2 mb-2" />
  </form>
</template>
<script>
import { ref } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const newTodo = ref("")
    const store = useStore()
    const addTodo = () => {
      if (newTodo.value != "") {
        store.commit("addTodo", newTodo.value)
        newTodo.value = ""
      } else {
        alert("You Must Specify A Todo")
      }
    }
    return {
      addTodo,
      newTodo,
    }
  },
}
</script>
