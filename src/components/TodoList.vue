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
import { mapState } from 'vuex';

export default {
  name: 'TodoList',
  computed: mapState([
    'tasks',
  ]),
  components: {
    TodoItem,
  },
  methods: {
    updateTask(param) {
      this.$store.commit('updateTask', param);
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
