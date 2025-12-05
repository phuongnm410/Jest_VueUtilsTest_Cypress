<template>
    <div>
        <form  @submit.prevent="handleCreateNewData" class="p-5 flex flex-col gap-5">
            <h1 class="text-lg font-bold">Create Todo</h1>
            <div class="flex flex-row gap-4 align-middle items-center ">
                <label class="font-bold"  for="title">Title</label>
                <input class="bg-gray-200 rounded-2xl p-2 w-full" type="text" placeholder="input title" id="title" v-model="todoData.title">
            </div>
            <div class="flex flex-row gap-4 align-middle items-center ">
                <label class="font-bold"  for="userID">User ID</label>
                <input class="bg-gray-200 rounded-2xl p-2 w-full" type="text" placeholder="input userID" id="useID" v-model="todoData.id">
            </div>
            <div class="flex flex-row gap-4 align-middle items-center ">
                <label class="font-bold"  for="completed">Complete</label>
                <input type="checkbox" name="" id="completed" v-model="todoData.completed">
            </div>
            <button type="submit" class="bg-red-300 rounded-2xl p-2 cursor-pointer">Create</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { reactive, useId } from 'vue';

import { useTodoStore } from '@/stores/todoStore';
const store = useTodoStore();
interface TodoData {

  title: string
  id: string
  completed: boolean
}
   const todoData = reactive<TodoData>({
        title: "",
        id: "",
        completed:false
   });

   function handleCreateNewData() {
        store.createTask({ ...todoData });

        //reset form
        todoData.title = '';
        todoData.id = "";
        todoData.completed = false
   }

//    const handleCreateNewData = async()=> {
//         await axios.post('http://localhost:3000/todos', {
//             title: todoData.title,
//             userId: todoData.userId,
//             completed:todoData.completed
//         });
//         console.log(todoData);
//    }

</script>
