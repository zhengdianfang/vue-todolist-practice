import axios from 'axios';
import { FETCH_TASK_LIST_URL, CREATE_TASK_URL } from '../constant';
import _ from 'lodash';
export default class Respository {

    constructor(store) {
        this.store = store;
    }
    store = undefined;

    addNewTask(newTask) {
        axios.post(CREATE_TASK_URL, newTask)
            .then((response) => this.store.commit('addNewTask', response.data.data))
            .catch(_.noop)
        
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