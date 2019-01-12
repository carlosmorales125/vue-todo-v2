const actions = {
        changeName({ commit }, payload) {
            commit('changeName', payload);
        },
        changeEmail({ commit }, payload) {
            commit('changeEmail', payload);
        },
};

export default actions;