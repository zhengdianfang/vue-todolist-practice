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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TodoList',
  mounted() {
    this.fetchAllTask();
  },
  computed: mapState([
    'tasks',
  ]),
  components: {
    TodoItem,
  },
  methods: {
    ...mapActions([
      'fetchAllTask',
    ]),
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
