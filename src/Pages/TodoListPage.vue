<template>
    <div class="container">
        <TodoList :todoListArray="todoList"></TodoList>
    </div>
</template>
<script>
    import TodoList from '../components/TodoList/TodoList.vue';
    import { EventBus } from '../event-bus';

    export default {
        name: 'todolistpage',
        components: {
            TodoList,
        },
        data() {
            return {
                todoList: [
                    {
                        id: 1,
                        description: "Hey Ma! I'm Still an Item!",
                        done: false
                    },
                    {
                        id: 2,
                        description: 'another item',
                        done: false
                    },
                    {
                        id: 3,
                        description: 'oh boy!',
                        done: false
                    },
                    {
                        id: 4,
                        description: "Hey Ma! I'm Still an Item!",
                        done: false
                    },
                    {
                        id: 5,
                        description: 'another item',
                        done: false
                    },
                    {
                        id: 6,
                        description: 'oh boy!',
                        done: false
                    },
                    {
                        id: 7,
                        description: "Hey Ma! I'm Still an Item!",
                        done: false
                    },
                    {
                        id: 8,
                        description: 'another item',
                        done: false
                    },
                    {
                        id: 9,
                        description: 'oh boy!',
                        done: false
                    },
                ]
            };
        },
        mounted() {
            EventBus.$on('editTask', taskData => {
                console.log(`here is your taskData: ${taskData}`);
            });

            EventBus.$on('completeTask', taskId => {
                this.todoList.forEach(item => {
                    if (item.id === taskId) {
                        item.done = true;
                    }
                });
            });

            EventBus.$on('deleteTask', taskId => {
                console.log(`here is your taskId: ${taskId}`);
            });
        }
    };
</script>
<style>

</style>
