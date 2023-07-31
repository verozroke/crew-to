import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHeaderStore = defineStore('headerStore', () => {
  const isCrewAwards = ref(false)
  const isMobile = ref(false)
  const burger = ref(false)

  const changeisCrewAwards = () => {
    isCrewAwards.value = !isCrewAwards.value
  }
  const changeIsMobile = () => {
    isMobile.value = !isMobile.value
  }
  return {
    isCrewAwards,
    changeisCrewAwards,
    isMobile,
    changeIsMobile,
    burger
  }
})
