import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

interface Todo {
    id:string,
    title:string,
    completed: boolean
}

export const useTodoStore = defineStore('todo', ()=> {
    const route = useRoute();
    const todoList = ref<Todo[]>([
        {
            id: "2a25",
            title: "số 1 trong state",
            completed: true
        },
        {
            title: "số 2 trong state",
            id: "2b25",
            completed: false
        },
    ]);
    const txtSearch = ref<string>("");

    const handleChangeTxtSearch = (value) => {
        txtSearch.value = value;
    }

    
    const filterName = computed(() => {
        return todoList.value.filter(x => x.title.indexOf(txtSearch.value) != -1)
    })
   
    const todoDetail =computed(()=> {
        return todoList.value.find(x => x.id == route.params.id);
    })

    function deleteTask(idTask:string) {
        todoList.value = todoList.value.filter(t => t.id !== idTask)
    }

    function createTask(todoTask: Todo) {
        todoList.value.push(todoTask);
        console.log(todoTask);
    }

    return {todoList, txtSearch, handleChangeTxtSearch,todoDetail, filterName, deleteTask, createTask}

})
