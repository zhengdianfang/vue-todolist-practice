import axios from 'axios';
import { FETCH_TASK_LIST_URL, CREATE_TASK_URL } from '../constant';
import _ from 'lodash';
export default class Respository {
    tasks = [];

    addNewTask(newTask) {
        axios.post(CREATE_TASK_URL, newTask)
            .then((response) => this.store.commit('addNewTask', response.data.data))
            .catch(_.noop)
        
    }

    updateTask(task) {
        const index = this.tasks.findIndex(elem => elem.id == task.id);
        if (index >= 0) {
            this.tasks.splice(index, 1, task);
        }
    }

    filterByStatus(status) {
        if (status) {
            return this.tasks.filter(item => item.status === status); 
        }
        return this.tasks;
    }

    fetchAllTasks() {
        axios.get(FETCH_TASK_LIST_URL)
            .then((response) => this.store.commit('updateTaskList', response.data))
            .catch(_.noop);
    }
}