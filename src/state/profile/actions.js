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
                    commit('createUser', resp.data);
                    router.push('/');
                })
                .catch(err => {
                    console.log(err);
                });
        }
};

export default actions;