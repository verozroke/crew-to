import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {
  const isCrewAwards = ref(false)

  const changeisCrewAwards = () => {
    isCrewAwards.value = !isCrewAwards.value
  }
  return {
    isCrewAwards,
    changeisCrewAwards
  }
})
