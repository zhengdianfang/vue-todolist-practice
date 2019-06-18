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

    filterByStatus(status) {
        return this.store.getters.filterByStatus(status);
    }
}