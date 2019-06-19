export default class Respository {
    tasks = [];

    addNewTask(newTask, callback) {
        newTask.id = this.tasks.length + 1;
        this.tasks.push(newTask);
        callback();
    }

    updateTask(task, callback) {
        const index = this.tasks.findIndex(elem => elem.id == task.id);
        if (index >= 0) {
            this.tasks.splice(index, 1, task);
        }
        callback(index);
    }

    filterByStatus(status) {
        if (status) {
            return this.tasks.filter(item => item.status === status); 
        }
        return this.tasks;
    }
}