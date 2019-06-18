<template>
    <div class="FilterTabs_container">
        <button
            class="FilterTabs_container_button-normal" 
            :class="{ 'FilterTabs_container_button-selected': (selected === 0)}"
            @click="clickTab(0)"
        >
            All
        </button>
        <button
            class="FilterTabs_container_button-normal"
            :class="{ 'FilterTabs_container_button-selected': (selected === 1)}"
            @click="clickTab(1)"
        >
            Undo
        </button>
        <button
            class="FilterTabs_container_button-normal"
            :class="{ 'FilterTabs_container_button-selected': (selected === 2)}"
            @click="clickTab(2)"
         >
            Done
         </button>
    </div>
</template>

<script>
import { UNDO, DONE, ALL_TAB, UNDO_TAB, DONE_TAB } from '../constant';

export default {
   name: 'FilterTabs',
   data() {
       return {
           selected: ALL_TAB,
       }
   },
   methods: {
       clickTab(type) {
           this.selected = type;
           switch(type) {
               case ALL_TAB:
                this.$emit('switchFilterStatus', undefined);
                break;
               case UNDO_TAB:
                this.$emit('switchFilterStatus', UNDO);
                break;
               case DONE_TAB:
                this.$emit('switchFilterStatus', DONE);
                break;
           }
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

