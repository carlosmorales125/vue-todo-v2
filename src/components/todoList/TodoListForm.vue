<template>
    <form class="todo-list-form" @submit.prevent>
        <div class="field">
            <label class="label">Enter a New Task</label>
        </div>
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
    </form>
</template>
<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'todolistform',
        data() {
            return {
                placeholderText: 'Enter a New Task',
                newTaskDescription: '',
            };
        },
        computed: mapState({
            userId: state => state.profile.user.id
        }),
        methods: {
            ...mapActions({
                addTask: 'addTask',
                getTasks: 'getTasks'
            }),
            AddNewTask() {
                this.addTask({
                    userId: this.userId,
                    description: this.newTaskDescription,
                })
                    .then(() => {
                        this.getTasks({
                            userId: this.userId
                        });
                    })
                    .catch(() => {
                        //need to code the unhappy result here.
                    });
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
