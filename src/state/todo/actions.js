import axios from 'axios';
import { authHeader } from '../../_helpers';

const actions = {
    getTasks({ commit }, payload) {
        axios.get(`http://localhost:3000/api/todo/todolist/${payload.userId}`, { headers: authHeader() })
            .then(resp => {
                commit('getTasks', resp.data.list[0].todoList);
            })
            .catch(err => {
                commit('getTasksError', err);
            });
    },
    addTask({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:3000/api/todo/addtask', payload, { headers: authHeader() })
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
        axios.put(`http://localhost:3000/api/todo/edittodo`, payload, { headers: authHeader() })
            .then(() => {
                commit('editTask', {id: payload.id, description: payload.description});
            })
            .catch(err => {
                console.log(err);
            });
    },
    deleteTask({ commit }, payload) {
        axios.delete(`http://localhost:3000/api/todo/deletetask/${payload.id}/${payload.userId}`, { headers: authHeader() })
            .then(() => {
                commit('deleteTask', payload.id);
            })
            .catch(err => {
                console.log(err);
            });
    },
    completeOrRestoreTask({ commit }, payload) {
        axios.put('http://localhost:3000/api/todo/completeorrestoretask', payload, { headers: authHeader() })
            .then(() => {
                commit('completeOrRestoreTask', payload.id);
            })
            .catch(err => {
                console.log(err);
            });
    },
};

export default actions;
