import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { ALL_TAB, UNDO_TAB, DONE_TAB, UNDO, DONE } from '../constant';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        tasks: [],
        tabType: ALL_TAB, 
    },
    getters: {
        filterByStatus(state) {
            if (state.tabType === DONE_TAB) {
                return _.filter(state.tasks, item => item.status === DONE);
            } else if (state.tabType === UNDO_TAB) {
                return _.filter(state.tasks, item => item.status === UNDO);
            }
            return state.tasks;
        }
    },
    mutations: {
        addNewTask(state, payload) {
            state.tasks.push(payload);
        },
        updateTask(state, payload) {
            const index = _.findIndex(state.tasks, { id: payload.id });
            if (index >= 0) {
                state.tasks.splice(index, 1, payload);
            }
        },
        updateTabType(state, payload) {
            state.tabType = payload;
        },
        updateTaskList(state, payload) {
            state.tasks.push(...payload);
        },
    }
});