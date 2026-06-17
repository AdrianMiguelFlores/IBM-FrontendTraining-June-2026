import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import TaskListView from '../day2/TaskListView_Template_Task2.vue';
import TaskCounter from '../day1/TaskCounter_Template.vue';

export const tasksData = [
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home', 
            component: Home
        },
        {
            path: '/task-counter',
            name: 'task-counter',
            component: TaskCounter
        },
        {
            path: '/task-list',
            name: 'task-list',
            component: TaskListView
        },
        {
            path: '/:catchAll(.*)', 
            redirect: '/'
        }
    ]
});

export default router;