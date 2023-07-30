<template>
  <ul :style="{ flexDirection: headerStore.isMobile ? 'column' : 'row' }">
    <li>
      <RouterLink :to="{ name: 'Home' }"><v-btn prepend-icon="mdi-home"
          :density="headerStore.isMobile ? 'default' : 'compact'" :variant="headerStore.isMobile ? 'elevated' : 'text'"
          class="text-capitalize">Главная</v-btn>
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'CrewAwards' }"><v-btn prepend-icon="mdi-star" style="font-weight: 700" color="#ffc14d"
          :density="headerStore.isMobile ? 'default' : 'compact'" :variant="headerStore.isMobile ? 'elevated' : 'text'"
          class="text-capitalize">CREW
          Awards</v-btn></RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'Speaker' }"><v-btn prepend-icon="mdi-account-tie"
          :density="headerStore.isMobile ? 'default' : 'compact'" :variant="headerStore.isMobile ? 'elevated' : 'text'"
          class="text-capitalize">Спикеры</v-btn>
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'Gallery' }"><v-btn prepend-icon="mdi-image"
          :density="headerStore.isMobile ? 'default' : 'compact'" class="text-capitalize"
          :variant="headerStore.isMobile ? 'elevated' : 'text'">Галерея</v-btn>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'
import { computed } from 'vue'

const headerStore = useHeaderStore()

const color = computed(() => {
  return headerStore.isCrewAwards ? '#f7f7f7' : '#284240'
})

const hoverColor = computed(() => {
  return headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'
})
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  gap: 0.5em;

  & li a {
    color: v-bind(color);
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      color: v-bind(hoverColor);
    }
  }
}
</style>
