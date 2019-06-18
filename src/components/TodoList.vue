<template>
  <div class="container">
    <TodoItem 
      v-for="(item, index) in tasks" 
      :key="index"
      :index="index"
      :task="item"
      @updateTask="updateTask"
     />
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import Respository from '../respository';


export default {
  name: 'TodoList',
  respository: undefined,
  data() {
    return {
      tasks: [], 
    }
  },
  mounted(){
    this.respository = new Respository(this.$store);
    this.tasks = this.respository.filterByStatus();
  },
  components: {
    TodoItem,
  },
  methods: {
    updateTask(param) {
      this.respository.updateTask(param);
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    overflow: scroll;
  }
</style>
