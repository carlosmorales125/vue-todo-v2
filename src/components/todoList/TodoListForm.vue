<template>
    <div class="todo-list-form">
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input class="input"
                       type="text"
                       :placeholder="placeholderText"
                       v-model="newTaskDescription"
                       @keyup.enter="AddNewTask"
                >
            </p>
            <p class="control">
                <a class="button is-info"
                   @click="AddNewTask"
                >
                    Add
                </a>
            </p>
        </div>
    </div>
</template>
<script>
    import { EventBus } from '../../event-bus';

    export default {
        name: 'todolistform',
        data() {
            return {
                placeholderText: 'Enter a New Task',
                newTaskDescription: '',
            };
        },
        methods: {
            AddNewTask() {
                EventBus.$emit('addNewTask', this.newTaskDescription);
                this.newTaskDescription = '';
            },
        },
    };
</script>
<style scoped>
    .todo-list-form {
        margin-bottom: 40px;
    }
</style>
