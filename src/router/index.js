import { createRouter, createWebHistory } from 'vue-router'

import { useTaskStore } from '../stores/taskStore.js'
import HomeView from '../day3/HomeView.vue'
import TaskListView from '../day4/TaskListView.vue'

const routes = [
  // TODO 3: Add a redirect from '/' to '/home'
  { path: '/', redirect: '/home' },
  
  // TODO 4: Add the /home route
  { path: '/home', component: HomeView },

  {path: '/day4/task-list', component: TaskListView}
]

const router = createRouter({

  history: createWebHistory(),
  routes,
})

export default router