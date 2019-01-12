import Vue from 'vue';
import Vuex from 'vuex';
import TodoModule from './todo/index';
import ProfileModule from './profile/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        todo: TodoModule,
        profile: ProfileModule,
    }
});

export default store;
