import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import CreateView from '@/components/CreateView.vue'
import TodoDetail from '@/components/TodoDetail.vue'

const routes = [
  { path: '/', name: "home", component: HomeView },
  { path: '/create',name: "create", component: CreateView},
  {
    path: "/todo/:id",
    name: "TodoDetail",
    component: TodoDetail
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})