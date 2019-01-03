<template>
    <div class="container">
        <TodoList :todoListArray="todoList"></TodoList>
    </div>
</template>
<script>
    import TodoList from '../components/todoList/TodoList.vue';
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
                this.todoList.forEach(item => {
                    if (item.id === taskData.id) {
                        item.description = taskData.description;
                    }
                });
            });

            EventBus.$on('completeOrRestoreTask', taskId => {
                this.todoList.forEach(item => {
                    if (item.id === taskId) {
                        if (!item.done) {
                            item.done = true;
                            return;
                        }

                        if (item.done) {
                            item.done = false;
                            return;
                        }
                    }
                });
            });

            EventBus.$on('deleteTask', taskId => {
                this.todoList.forEach((item, index, object) => {
                    if (item.id === taskId) {
                        object.splice(index, 1);
                        return;
                    }
                });
            });
        },
    };
</script>
<style>

</style>
