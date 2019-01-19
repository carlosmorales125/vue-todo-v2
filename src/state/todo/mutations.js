const mutations = {
    getTasks(state, tasks) {
        state.todoList = tasks;
    },
    getTasksError(state, err) {
        alert(err);
    },
    addTask(state, { description, done }) {
        let _id = `fakeForNow ${new Date().getTime()}`;
        state.todoList.push({
            _id,
            description,
            done
        });
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
            if (item._id === id) {
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
