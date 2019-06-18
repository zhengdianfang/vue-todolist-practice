import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        tasks: [],
    },
    mutations: {
        addNewTask(state, payload) {
            state.tasks.push(payload);
        },
        updateTask(state, payload) {
            const index = _.findIndex(this.tasks, { id: payload.id });
            if (index >= 0) {
                state.tasks.splice(index, 1, payload);
            }
        },
    }
});