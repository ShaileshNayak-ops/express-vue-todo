<template>
  <div>
    <div class="content">
      <h1 class="header">Todo App</h1>
      <router-link to="/login" class="btn btn-primary">
        Login
      </router-link>
      <h5>Or</h5>
      <router-link to="/signin" class="btn btn-primary">
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.content {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 225px;
}
.content button {
  margin-top: 5%;
  margin-left: 5px;
}
* {
  box-sizing: border-box;
}

.header {
  font-size: 3rem;
}
</style>
