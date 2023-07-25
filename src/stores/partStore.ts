import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePartStore = defineStore('partStore', () => {
  const dialog = ref(false)

  const changeDialog = () => {
    dialog.value = !dialog.value
  }
  return {
    dialog,
    changeDialog
  }
})
