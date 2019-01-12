const mutations = {
        changeName(state, name) {
            state.user.name = name;
        },
        changeEmail(state, email) {
            state.user.email = email;
        },
};

export default mutations;