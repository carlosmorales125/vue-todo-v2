import Vue from 'vue';
import Vuex from 'vuex';
import TodoModule from './todo/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    modules: {
        todo: TodoModule
    }
});

export default store;
