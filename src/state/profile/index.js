import state from './state';
import mutations from './mutations';
import actions from './actions';

const ProfileModule = {
    state,
    mutations,
    actions,
};

export default ProfileModule;

// const ProfileModule = {
//     state: {
//         profile: {
//             email: '',
//             name: '',
//         },
//     },
//     mutations: {
//         changeName(state, { name }) {
//             state.profile.name = name;
//         },
//         changeEmail(state, { email }) {
//             state.profile.email = email;
//         },
//     },
//     actions: {
//         changeName({ context }, payload) {
//             context('changeName', payload);
//         },
//         changeEmail({ context }, payload) {
//             context('changeEmail', payload);
//         },
//     },
//  };
