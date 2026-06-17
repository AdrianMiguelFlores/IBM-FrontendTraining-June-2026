import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('task', () => {
  // State (Variables)
  const tasks = ref([
    { id: 1, name: 'Clean room', dueDate: '2026-06-18', done: false },
    { id: 2, name: 'Wash the dishes', dueDate: '2026-06-19', done: true },
    { id: 3, name: 'Study', dueDate: '2026-06-20', done: false },
    { id: 4, name: 'Continue the project', dueDate: '2026-06-21', done: true },
  ])

  const currentTask = ref(null)

  // Getters (Computed properties)
  const hasActiveTask = computed(() => currentTask.value !== null)

  // Actions (Functions)
  function setTask(task) {
    currentTask.value = task
  }

  function clearTask() {
    currentTask.value = null
  }

  return { tasks, currentTask, hasActiveTask, setTask, clearTask }
})