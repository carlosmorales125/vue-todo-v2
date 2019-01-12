const actions = {
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
};

export default actions;
