import axios from 'axios';
import { router } from '../../router';
import {
    authHeader,
    setLocalUser,
    removeLocalUser,
    handleAxiosErrors
} from '../../_helpers';

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
                    handleAxiosErrors(err);
                });
        },
        async changePassword({ commit }, payload) {
            try {
                const resp = await axios.post(
                    'http://localhost:3000/api/users/changepassword',
                    payload,
                    { headers: authHeader() }
                );
                commit('loadUser', resp.data);
            } catch (e) {
                handleAxiosErrors(e);
            }
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
                    handleAxiosErrors(err);
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
                    handleAxiosErrors(err);
                });
        },
        logout({ commit }) {
            removeLocalUser();
            commit('unloadUser');
            router.push('/login');
        }
};

export default actions;
