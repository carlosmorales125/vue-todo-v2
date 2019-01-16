const mutations = {
    getTasks(state, tasks) {
        state.todoList = tasks;
    },
    getTasksError(state, err) {
        alert(err);
    },
    addTask(state, task) {
        state.todoList.push(task);
    },
    addTaskError(state, err) {
        alert(err);
    },
    editTask(state, { id, description }) {
        state.todoList.forEach(item => {
            if (item.id === id) {
                item.description = description;
            }
        });
    },
    deleteTask(state, id) {
        state.todoList.forEach((item, index, object) => {
            if (item.id === id) {
                object.splice(index, 1);
                return;
            }
        });
    },
    completeOrRestoreTask(state, id) {
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
};

export default mutations;
