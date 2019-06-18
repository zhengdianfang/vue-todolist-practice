import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        tasks: [],
    },
    getters: {
        filterByStatus: (state) => (status) => {
            if (status) {
                return _.filter(state.tasks, item => item.status === status); 
            }
            return state.tasks;
        }
    },
    mutations: {
        addNewTask(state, payload) {
            payload.id = state.tasks.length + 1;
            state.tasks.push(payload);
        },
        updateTask(state, payload) {
            const index = _.findIndex(state.tasks, { id: payload.id });
            if (index >= 0) {
                state.tasks.splice(index, 1, payload);
            }
        },
    }
});