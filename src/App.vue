<template>
  <div id="app">
     <TodoListPage></TodoListPage>
  </div>
</template>

<script>
import TodoListPage from './Pages/TodoListPage.vue'

export default {
  name: 'app',
  components: {
    TodoListPage
  }
}
</script>

<style>
#app {

}
</style>
