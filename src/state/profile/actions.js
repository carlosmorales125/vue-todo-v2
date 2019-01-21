import axios from 'axios';
import router from '../../router';

const actions = {
        changeName({ commit }, payload) {
            commit('changeName', payload);
        },
        changeEmail({ commit }, payload) {
            commit('changeEmail', payload);
        },
        createUser({ commit }, payload) {
            axios.post('http://localhost:3000/api/users/createuser', payload)
                .then(resp => {
                    commit('loadUser', resp.data);
                    router.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
        },
        login({ commit }, payload) {
            axios.post('http://localhost:3000/api/users/login', payload)
                .then(resp => {
                    commit('loadUser', resp.data);
                    router.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }
};

export default actions;