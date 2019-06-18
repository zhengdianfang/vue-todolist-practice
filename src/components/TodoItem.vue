<template>
  <div 
    class="TodoItem_container"
    @dblclick.self="changeEditStatus"
   >
        
      <span 
        :class="{'TodoItem_container-done': task.status === 'Done'}"
        :style="{ display: editable ? 'none' : 'block' }"
      >
        {{ index + 1 }}. {{ task.content }}
      </span>
      <input
        type="text"
        :style="{ display: editable ? 'block': 'none' }"
        v-model="content"
        @keyup.enter="updateTaskContent"
      />
      <input type="checkbox" :checked="task.status === 'Done'" @change="onChange" />
  </div>
</template>

<script>
import { DONE, UNDO } from '../constant';

export default {
  name: 'TodoItem',
  props: {
    index: {
        type: Number,
        required: true
    }, 
    task: {
        type: Object,
        required: true
    },
  },
  data() {
      return {
         editable: false, 
         content: this.task.content,
      }
  },
  methods: {
    onChange(event) {
        this.$emit('updateTask', { ...this.task, status: event.target.checked ? DONE: UNDO });
    },
    updateTaskContent() {
        this.$emit('updateTask', { ...this.task, content: this.content });
        this.editable = false;
    },
    changeEditStatus() {
        if(!this.editable) {
          this.editable = true;
        }
    },
  }
}
</script>

<style scoped>
  .TodoItem_container {
      display: flex;
      padding: 8px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 32px;
      line-height: 32px;
      cursor: pointer;
  }

  .TodoItem_container:hover {
    background-color: green;
    opacity: 0.5;
  }

  .TodoItem_container-done {
      text-decoration: line-through;
  }
</style>
