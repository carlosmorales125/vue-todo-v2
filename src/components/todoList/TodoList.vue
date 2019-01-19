<template>
    <div class="todo-list">
        <div class="todo-list-incomplete">
            <h1 class="title">Incomplete Tasks</h1>
            <div class="columns is-multiline">
                <TodoListItem v-for="item in incompleteTodoListArray"
                              :key="item._id"
                              :itemId="item._id"
                              :complete="item.done"
                              :description="item.description"
                >
                    {{ item.description }}
                </TodoListItem>
            </div>
        </div>
        <div class="todo-list-complete" v-if="completeTodoListArray.length">
            <h1 class="title">Complete Tasks</h1>
            <div class="columns is-multiline">
                <TodoListItem v-for="item in completeTodoListArray"
                              :key="item._id"
                              :itemId="item._id"
                              :complete="item.done"
                              :description="item.description"
                >
                    {{ item.description }}
                </TodoListItem>
            </div>
        </div>
    </div>
</template>
<script>
    import TodoListItem from './TodoListItem.vue';

    export default {
        name: 'todolist',
        components: {
            TodoListItem,
        },
        props: {
            todoListArray: Array,
        },
        computed: {
            incompleteTodoListArray() {
                return this.todoListArray.filter(item => ! item.done);
            },
            completeTodoListArray() {
                return this.todoListArray.filter(item => item.done);
            },
        },
    };
</script>
<style>
    .todo-list-incomplete, todo-list-complete {
        padding-bottom: 20px;
    }
    .todo-list {
        padding-bottom: 40px;
    }
</style>
