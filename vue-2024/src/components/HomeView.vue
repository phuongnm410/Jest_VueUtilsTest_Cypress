<template>
    <div class="p-3 m-auto flex flex-col">
        <div class="searchBar flex items-center w-full justify-center">
            <!-- <i class="pi pi-search"></i> -->
            <input class="bg-gray-300 rounded-4xl px-5 py-3" type="text" placeholder="Search Todo Here!"
                v-model="store.txtSearch">
        </div>
        <div class="group-card flex flex-col gap-6 mt-6 px-5">
            <div class="card-item  px-5 py-2 bg-green-900 text-white rounded-xl cursor-pointer" v-for="item in store.filterName"
                :key="item.id" >
                <p @click="router.push({path:`/todo/${item.id}`})" class="font-bold text-left text-2xl">{{ item.title }}</p>
                <button class="text-red-300 underline" @click="store.deleteTask(item.id)">detele task</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router';
import { useTodoStore } from '@/stores/todoStore';
// const todos = ref([]);
// const txtSearch = ref("");
const router = useRouter();
const store = useTodoStore();
// onMounted(() => {
// // fetch('https://jsonplaceholder.typicode.com/todos')
//     //   .then(response => response.json())
//     //   .then(json => todos.value = json)
//     (async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/todos');
//             todos.value = response.data;
//         } catch (error) {
//             console.log(error);
//         }

//     })();

// });


</script>
