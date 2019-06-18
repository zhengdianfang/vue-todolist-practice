<template>
  <div id="app">
    <AddTaskInput @createNewTask="createNewTask" />
    <FilterTabs @switchFilterStatus="switchFilterStatus" />
    <TodoList :tasks="tasks" @updateTask="updateTask" />
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import AddTaskInput from './components/AddTaskInput';
import FilterTabs from './components/FilterTabs';
import Respository from './respository';

const respository = new Respository();

export default {
  name: 'app',
  data() {
    return {
      filterStatus: undefined,
      tasks: respository.filterByStatus(this.filterStatus),
    }
  },
  components: {
    TodoList,
    AddTaskInput,
    FilterTabs,
  },
  watch: {
    filterStatus(newValue) {
      this.tasks = respository.filterByStatus(newValue);
    }
  },
  methods: {
    createNewTask(newTask) {
      this.tasks = respository.addNewTask(newTask);
    },
    switchFilterStatus(status) {
      this.filterStatus = status;
    },
    updateTask(task) {
      this.tasks = respository.updateTask(task); 
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
