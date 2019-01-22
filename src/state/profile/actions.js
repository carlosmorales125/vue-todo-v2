import axios from 'axios';
import { router } from '../../router';
import { authHeader } from '../../_helpers';

const actions = {
        changeName({ commit }, payload) {
            commit('changeName', payload);
            axios.post('http://localhost:3000/api/users/changename', payload, { headers: authHeader()})
                .then(resp => {
                    if (resp.status === 200) commit('changeName', payload);
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
                .then(() => {
                    router.push('/login');
                })
                .catch(err => {
                    console.dir(err);
                });
        },
        login({ commit }, payload) {
            axios.post('http://localhost:3000/api/users/login', payload)
                .then(resp => {
                    localStorage.setItem('__vue__todo__app__user__', JSON.stringify(resp.data));
                    commit('loadUser', resp.data);
                    router.push('/');
                })
                .catch(err => {
                    console.dir(err);
                });
        },
        logout({ commit }) {
            localStorage.removeItem('__vue__todo__app__user__');
            commit('unloadUser');
            router.push('/login');
        }
};

export default actions;