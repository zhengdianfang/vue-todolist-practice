<template>
    <div class="AddTaskInput_container">
        <input 
            placeholder="Please input new task" 
            v-model="content"
            @keyup.enter="submitNewTask()"
        />
    </div>
</template>

<script>
export default {
    name: "AddTaskInput",
    data() {
        return {
            content: '',
        }
    },
    methods: {
       submitNewTask() {
           this.$emit('createNewTask', { content: this.content, done: false });
           this.content = '';
       } 
    },
}
</script>

<style scoped>
.AddTaskInput_container {
    height: 80px;
}

.AddTaskInput_container > input {
    width: 100%;
    height: 32px;
    padding: 4px;
    font-size: 16px;
    border: 1px solid green;
}
</style>

