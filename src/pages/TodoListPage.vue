<template>
    <div class="todo-list-page">
        <TodoListForm></TodoListForm>
        <TodoList :todoListArray="todoList"></TodoList>
    </div>
</template>
<script>
    import TodoList from '../components/todoList/TodoList.vue';
    import TodoListForm from '../components/todoList/TodoListForm.vue';
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'todolistpage',
        components: {
            TodoList,
            TodoListForm,
        },
        computed: mapState({
            todoList: state => state.todo.todoList,
            userId: state => state.profile.user.id
        }),
        methods: {
            ...mapActions({
                getTasks: 'getTasks',
            }),
        },
        beforeMount() {
            this.getTasks({
                userId: this.userId
            });
        },
    };
</script>
<style scoped>
    .todo-list-page {
        padding: 0 5%;
        flex: 1;
    }
</style>
