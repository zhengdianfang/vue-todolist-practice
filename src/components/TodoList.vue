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
  props: {
    tasks: Array,
  },
  components: {
    TodoItem,
  },
  methods: {
    updateTask(param) {
      this.$emit('updateTask', param);
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
