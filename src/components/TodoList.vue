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


export default {
  name: 'TodoList',
  respository: undefined,
  computed: {
    tasks() {
      return this.respository.filterByStatus();
    }
  },
  created(){
    this.respository = new Respository(this.$store);
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
