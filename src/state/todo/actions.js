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
                    commit('addTask', payload);
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    editTask({ commit, state }, payload) {
        axios.put(`http://localhost:3000/api/todo/edittodo`, payload)
            .then(() => {
                commit('editTask', {id: payload.id, description: payload.description});
            })
            .catch(err => {
                console.log(err);
            });
    },
    deleteTask({ commit }, payload) {
        commit('deleteTask', payload);
    },
    completeOrRestoreTask({ commit }, payload) {
        axios.put('http://localhost:3000/api/todo/completeorrestoretask', payload)
            .then(() => {
                commit('completeOrRestoreTask', payload.id);
            })
            .catch(err => {
                console.log(err);
            });
    },
};

export default actions;
