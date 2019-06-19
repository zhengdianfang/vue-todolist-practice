import Vue from 'vue';
import Vuex from 'vuex';
import { ALL_TAB, UNDO_TAB, DONE_TAB, UNDO, DONE } from '../constant';
import Respository from '../respository';

Vue.use(Vuex);
const respository = new Respository();

export default new Vuex.Store({
    state: {
        tasks: respository.filterByStatus(),
        tabType: ALL_TAB, 
    },
    mutations: {
        addNewTask(state, payload) {
            respository.addNewTask(payload);
        },
        updateTask(state, payload) {
            respository.updateTask(payload);
        },
        updateTabType(state, payload) {
            state.tabType = payload;
            if (state.tabType === DONE_TAB) {
                    state.tasks = respository.filterByStatus(DONE); 
                } else if (state.tabType === UNDO_TAB) {
                    state.tasks = respository.filterByStatus(UNDO); 
                } else {
                    state.tasks = respository.filterByStatus();
                }
            }
        }
});