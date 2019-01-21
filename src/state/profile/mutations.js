const mutations = {
        changeName(state, name) {
            state.user.name = name;
        },
        changeEmail(state, email) {
            state.user.email = email;
        },
        loadUser(state, { _id, name, email }) {
            state.user.id = _id;
            state.user.name = name;
            state.user.email = email;
        },
        unloadUser(state) {
            state.user.id = '';
            state.user.name = '';
            state.user.email = '';
        },
};

export default mutations;