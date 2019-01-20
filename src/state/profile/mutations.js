const mutations = {
        changeName(state, name) {
            state.user.name = name;
        },
        changeEmail(state, email) {
            state.user.email = email;
        },
        createUser(state, { _id, name, email }) {
            state.user.id = _id;
            state.user.name = name;
            state.user.email = email;
        }
};

export default mutations;