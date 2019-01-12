const ProfileModule = {
    state: {
        profile: {
            email: '',
            name: '',
        },
    },
    mutations: {
        changeName(state, { name }) {
            state.profile.name = name;
        },
        changeEmail(state, { email }) {
            state.profile.email = email;
        },
    },
    actions: {
        changeName({ context }, payload) {
            context('changeName', payload);
        },
        changeEmail({ context }, payload) {
            context('changeEmail', payload);
        },
    },
};

export default ProfileModule;
