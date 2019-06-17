<template>
    <div class="FilterTabs_container">
        <button
            class="FilterTabs_container_button-normal" 
            :class="{ 'FilterTabs_container_button-selected': (selected === 'All')}"
            @click="clickTab('All')"
        >
            All
        </button>
        <button
            class="FilterTabs_container_button-normal"
            :class="{ 'FilterTabs_container_button-selected': (selected === 'Undo')}"
            @click="clickTab('Undo')"
        >
            Undo
        </button>
        <button
            class="FilterTabs_container_button-normal"
            :class="{ 'FilterTabs_container_button-selected': (selected === 'Done')}"
            @click="clickTab('Done')"
         >
            Done
         </button>
    </div>
</template>

<script>
export const ALL = 'All';
export const UNDO = 'Undo';
export const DONE = 'Done';
export default {
   name: 'FilterTabs',
   data() {
       return {
           selected: ALL,
       }
   },
   computed: {
       buttonStyle(type) {
           return this.selected === type ? 'FilterTabs_container_button-normal' : 'FilterTabs_container_button-selected'
       }
   },
   methods: {
       clickTab(type) {
           this.selected = type;
           this.$emit('switchFilterType', type);
       }
   }
}
</script>
<style scoped>
.FilterTabs_container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.FilterTabs_container_button-normal {
    border: 1px solid green;
    height: 40px;
    width: 90px;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
}

.FilterTabs_container_button-selected {
    border: 1px solid green;
    background-color: green;
    height: 40px;
    width: 90px;
    color: white;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
}
</style>

