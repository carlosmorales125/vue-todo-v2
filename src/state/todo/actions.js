import axios from 'axios';

const actions = {
    getTasks({ commit }) {
        axios.get('http://localhost:3000/api/todo/todolist/fakefornow')
            .then(resp => {
                commit('getTasks', resp.data.todoList);
            })
            .catch(err => {
                commit('getTasksError', err);
            });
    },
    addTask({ commit }, payload) {
        axios.put('http://localhost:3000/api/todo/addtask/fakefornow', payload)
            .then(resp => {
                commit('addTask', resp.data);
            })
            .catch(err => {
                commit('addTaskError', err);
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
