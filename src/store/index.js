import Vue from 'vue';
import Vuex from 'vuex';
import { ALL_TAB, UNDO_TAB, DONE_TAB, UNDO, DONE } from '../constant';
import Respository from '../respository';

Vue.use(Vuex);
const respository = new Respository();

export default new Vuex.Store({
    state: {
        tasks: [],
        tabType: ALL_TAB, 
    },
    getters: {
        filterByStatus(state) {
            if (state.tabType === DONE_TAB) {
                state.tasks = respository.filterByStatus(DONE); 
            } else if (state.tabType === UNDO_TAB) {
                state.tasks = respository.filterByStatus(UNDO); 
            }
            return state.tasks;
        }
    },
    mutations: {
        addNewTask(state, payload) {
            respository.addNewTask(payload, () => {
                state.tasks.push(payload);
            });
        },
        updateTask(state, payload) {
            respository.updateTask(payload, (index) => {
                state.tasks.splice(index, 1, payload);
            });
        },
        updateTabType(state, payload) {
            state.tabType = payload;
        }
    }
});