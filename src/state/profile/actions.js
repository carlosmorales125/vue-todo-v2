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
                    console.log(resp);
                    commit('createUser', resp.data);
                    router.push('/');
                    // if the response is good, I'd like to route the user to either login or todo page.
                })
                .catch(err => {
                    console.log(err);
                });
        }
};

export default actions;