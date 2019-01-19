import axios from 'axios';

const actions = {
    getTasks({ commit }, payload) {
        axios.get(`http://localhost:3000/api/todo/todolist/${payload.userId}`)
            .then(resp => {
                commit('getTasks', resp.data.list[0].todoList);
            })
            .catch(err => {
                commit('getTasksError', err);
            });
    },
    addTask({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:3000/api/todo/addtask', payload)
                .then(() => {
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    editTask({ commit, state }, {id, description}) {
        const payload = {
            userId: state.profile.user.id,
            taskId: id,
            description,
        };
        axios.put(`http://localhost:3000/api/todo/edittodo`, payload)
            .then(resp => {

            })
            .catch(err => {

            });
        commit('editTask', payload);
    },
    deleteTask({ commit }, payload) {
        commit('deleteTask', payload);
    },
    completeOrRestoreTask({ commit }, payload) {
        commit('completeOrRestoreTask', payload);
    },
};

export default actions;
