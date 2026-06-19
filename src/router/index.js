import { createRouter, createWebHistory } from 'vue-router'

import { useTaskStore } from '../stores/taskStore.js'
import HomeView from '../day3/HomeView.vue'
import TaskListView from '../day4/TaskListView.vue'
import TodoListView from '../day5/TodoListView.vue'

const routes = [
  // TODO 3: Add a redirect from '/' to '/home'
  { path: '/', redirect: '/home' },
  
  // TODO 4: Add the /home route
  { path: '/home', component: HomeView },

  // day 4 path
  {path: '/day4/task-list', component: TaskListView},

  // day 5 path
  {path: '/day5/todo-list', component: TodoListView},
]

const router = createRouter({

  history: createWebHistory(),
  routes,
})

export default router