import axios from 'axios';
import { FETCH_TASK_LIST_URL, CREATE_TASK_URL } from '../constant';
export default class Respository {
    tasks = [];

    addNewTask(newTask) {
        axios.post(CREATE_TASK_URL, newTask)
            .then((response) => this.tasks.push(response.data.data))
            .catch(() => {})
        
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

    fetchAllTasks(callback) {
        axios.get(FETCH_TASK_LIST_URL)
            .then((response) => {
                this.tasks = response.data;
                callback();
            })
            .catch(() => {});
    }
}