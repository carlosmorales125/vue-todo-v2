// todo example:
// {
//     id: 6,
//         description: 'oh boy!',
//     done: false
// },

const TodoModule = {
    state: {
        todoList: [],
    },
    mutations: {
        addTask(state, task) {

        },
        editTask(state, { id, description }) {

        },
        deleteTask(state, { id }) {

        },
        completeOrRestoreTask(state, { id, done}) {

        },
    },
    actions: {
        addTask({ commit }) {

        },
        editTask({ commit }) {

        },
        deleteTask({ commit }) {

        },
        completeOrRestoreTask({ commit }) {

        },
    },
    getters: {
        getCompleteTasks(state) {

        },
        getIncompleteTasks(state) {

        },
    }
};

export default TodoModule;
