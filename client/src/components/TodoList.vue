<template>
  <div>
    <div v-if="todos.length != 0">
      <div v-for="todo in todos">
        <div class="alert alert-primary">
          {{ todo.content }}
          <span @click="deleteTodo(todo)" class="close"> X </span>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>No Todos Were Found</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [],
    }
  },
  methods: {
    async deleteTodo(todo) {
      const res = await fetch(
        `http://localhost:5000/deleteTodos?id=${todo._id}`
      )
    },
    async fetchTodos() {
      const res = await fetch(
        `http://localhost:5000/getTodos?name=${this.$store.state.currentUser}`
      )
      const data = await res.json()
      return data
    },
  },
  async created() {
    this.todos = await this.fetchTodos()
    // this.todos = todos.filter(
    //   (todo) => todo.user == this.$store.state.currentUser
    // )
    // console.log(this.$store.state.currentUser)
  },
  watch: {
    async todos() {
      this.todos = await this.fetchTodos()
    },
  },
}
</script>
<style>
.close {
  float: right !important;
  cursor: pointer;
}
</style>
