<template>
    <div class="p-4 bg-amber-300 font-bold">
        <p>ID todo <span class="italic font-normal text-red-500">{{ store.todoDetail.id }}</span></p>
        <p>Title <span class="italic font-normal text-red-500">{{ store.todoDetail.title }}</span> </p>
        <p>UserID  <span class="italic font-normal text-red-500">{{ store.todoDetail.userId }}</span></p>
    </div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todoStore';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const todoDetail = ref({});
const store = useTodoStore();
// onMounted(() => {
//     (async () => {
//         try {
//             const response = await axios.get('http://localhost:3000/todos/' + route.params.id);
//             todoDetail.value = response.data;
//         } catch (error) {
//             console.log(error);
//         }

//     })();

// })

</script>

<style lang="scss" scoped></style>