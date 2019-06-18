import _ from 'lodash';

export default class Respository {
    tasks = [];

    addNewTask(newTask) {
        newTask.id = this.tasks.length + 1;
        this.tasks.push(newTask);
        return this.tasks;
    }

    updateTask(task) {
        const index = _.findIndex(this.tasks, { id: task.id });
        if (index >= 0) {
            this.tasks.splice(index, 1, task);
        }
        return this.tasks;
    }

    filterByStatus(status) {
        if (status) {
            return _.filter(this.tasks, item => item.status === status); 
        }
        return this.tasks;
    }
}