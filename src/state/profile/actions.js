import axios from 'axios';
import { router } from '../../router';
import { authHeader, setLocalUser, removeLocalUser } from '../../_helpers';

const actions = {
        changeName({ commit }, payload) {
            axios.post('http://localhost:3000/api/users/changename', payload, { headers: authHeader()})
                .then(resp => {
                    if (resp.status === 200) {
                        removeLocalUser();
                        setLocalUser(resp.data)
                        commit('changeName', resp.data);
                    }
                })
                .catch(err => {
                    console.dir(err);
                });
        },
        changeEmail({ commit }, payload) {
            commit('changeEmail', payload);
        },
        createUser({ commit }, payload) {
            axios.post('http://localhost:3000/api/users/createuser', payload)
                .then(resp => {
                    if (resp.status === 200) router.push('/login');
                    // todo: Code a success message to be displayed on the login page.
                })
                .catch(err => {
                    console.dir(err);
                });
        },
        login({ commit }, payload) {
            axios.post('http://localhost:3000/api/users/login', payload)
                .then(resp => {
                    if (resp.status === 200) {
                        setLocalUser(resp.data);
                        commit('loadUser', resp.data);
                        router.push('/');
                    }
                })
                .catch(err => {
                    console.dir(err);
                });
        },
        logout({ commit }) {
            removeLocalUser();
            commit('unloadUser');
            router.push('/login');
        }
};

export default actions;