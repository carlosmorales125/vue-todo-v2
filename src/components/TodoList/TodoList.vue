<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Incomplete Tasks</h1>
            <div class="columns is-multiline">
                <TodoListItem v-for="item in incompleteTodoListArray"
                              :key="item.id"
                              :itemId="item.id"
                              :complete="item.done"
                              :description="item.description"
                >
                    {{ item.description }}
                </TodoListItem>
            </div>
        </div>
        <div class="container">
            <h1 class="title">Complete Tasks</h1>
            <div class="columns is-multiline">
                <TodoListItem v-for="item in completeTodoListArray"
                              :key="item.id"
                              :itemId="item.id"
                              :complete="item.done"
                              :description="item.description"
                >
                    {{ item.description }}
                </TodoListItem>
            </div>
        </div>
    </section>
</template>
<script>
    import TodoListItem from '../TodoList/TodoListItem.vue';

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
            }
        }
    };
</script>
<style>
    .container {
        padding-top: 20px;
    }

    .container:first-child {
        padding-top: 0;
    }
</style>
