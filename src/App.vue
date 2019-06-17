<template>
  <div id="app">
    <AddTaskInput @createNewTask="createNewTask" />
    <FilterTabs @switchFilterType="switchFilterType" />
    <TodoList :tasks="filterTasks" @updateTask="updateTask" />
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import AddTaskInput from './components/AddTaskInput';
import FilterTabs from './components/FilterTabs';
import { ALL, UNDO, DONE } from './components/FilterTabs.vue';
import _ from 'lodash';

export default {
  name: 'app',
  data() {
    return {
      tasks: [], 
      filter: null,
    }
  },
  computed: {
    filterTasks() {
      return _.filter(this.tasks, this.filter);
    }
  },
  components: {
    TodoList,
    AddTaskInput,
    FilterTabs,
  },
  methods: {
    createNewTask(newTask) {
      this.tasks.push(newTask);
    },
    switchFilterType(type) {
      if (type === ALL) {
        this.filter = null;
      } else if (type === UNDO) {
        this.filter = (task) => !task.done;
      } else if (type === DONE) {
        this.filter = (task) => task.done;
      }
    },
    updateTask({ index, task }) {
      this.tasks.splice(index, 1, task);
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
