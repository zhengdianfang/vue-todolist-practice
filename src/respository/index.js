import axios from 'axios';
import { FETCH_TASK_LIST_URL } from '../constant';
import _ from 'lodash';
export default class Respository {

    constructor(store) {
        this.store = store;
    }
    store = undefined;

    addNewTask(newTask) {
        this.store.commit('addNewTask', newTask);
    }

    updateTask(task) {
        this.store.commit('updateTask', task);
    }

    filterByStatus() {
        return this.store.getters.filterByStatus;
    }

    fetchAllTasks() {
        axios.get(FETCH_TASK_LIST_URL)
            .then((response) => this.store.commit('updateTaskList', response.data))
            .catch(_.noop);
    }
}