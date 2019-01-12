// todo example:
// {
//     id: 6,
//         description: 'oh boy!',
//     done: false
// },

// Since we don't have a backend setup, for now we'll use actions to just commit the mutations.
// Future state of this module will have access to axios to make calls out to the backend and have error handling.

const TodoModule = {
    state: {
        todoList: [],
    },
    mutations: {
        addTask(state, task) {
            state.todoList.push(task);
        },
        editTask(state, { id, description }) {
            state.todoList.forEach(item => {
                if (item.id === id) {
                    item.description = description;
                }
            });
        },
        deleteTask(state, { id }) {
            state.todoList.forEach((item, index, object) => {
                if (item.id === id) {
                    object.splice(index, 1);
                    return;
                }
            });
        },
        completeOrRestoreTask(state, { id }) {
            state.todoList.forEach(item => {
                if (item.id === id) {
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
        },
    },
    actions: {
        addTask({ commit }, payload) {
            commit('addTask', payload);
        },
        editTask({ commit }, payload) {
            commit('editTask', payload);
        },
        deleteTask({ commit }, payload) {
            commit('deleteTask', payload);
        },
        completeOrRestoreTask({ commit }, payload) {
            commit('completeOrRestoreTask', payload);
        },
    },
};

export default TodoModule;
