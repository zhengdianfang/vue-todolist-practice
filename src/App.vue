<template>
  <div id="app">
    <AddTaskInput />
    <FilterTabs @switchFilterStatus="switchFilterStatus" />
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import AddTaskInput from './components/AddTaskInput';
import FilterTabs from './components/FilterTabs';

export default {
  name: 'app',
  
  components: {
    TodoList,
    AddTaskInput,
    FilterTabs,
  },
  methods: {
    switchFilterStatus(status) {
      this.filterStatus = status;
    },
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
