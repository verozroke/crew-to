<template>
  <ul :style="{ flexDirection: headerStore.isMobile ? 'column' : 'row' }" class="list">
    <li>
      <RouterLink :to="{ name: 'Home' }"><v-btn @click="close" width="100%" prepend-icon="mdi-home"
          :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'" style="font-weight: 700"
          :density="headerStore.isMobile ? 'default' : 'compact'" size="large"
          :variant="headerStore.isMobile ? 'tonal' : 'text'" class="text-capitalize">{{ t('header.home') }}</v-btn>
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'CrewAwards' }"><v-btn @click="close" width="100%" prepend-icon="mdi-star"
          style="font-weight: 700" color="#ffc14d" :density="headerStore.isMobile ? 'default' : 'compact'"
          :variant="headerStore.isMobile ? 'tonal' : 'text'" size="large" class="text-capitalize">CREW Awards</v-btn>
      </RouterLink>
    </li>
    <!-- <li>
      <RouterLink :to="{ name: 'Speaker' }"
        ><v-btn
          @click="close"
          width="100%"
          prepend-icon="mdi-account-tie"
          style="font-weight: 700"
          :density="headerStore.isMobile ? 'default' : 'compact'"
          size="large"
          :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'"
          :variant="headerStore.isMobile ? 'tonal' : 'text'"
          class="text-capitalize"
          >{{ t('header.speakers') }}</v-btn
        >
      </RouterLink>
    </li> -->
    <li>
      <RouterLink :to="{ name: 'Gallery' }"><v-btn @click="close" width="100%" size="large" prepend-icon="mdi-image"
          style="font-weight: 700" :density="headerStore.isMobile ? 'default' : 'compact'" class="text-capitalize"
          :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'" :variant="headerStore.isMobile ? 'tonal' : 'text'">{{
            t('header.gallery') }}</v-btn>
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useHeaderStore } from '@/stores/headerStore'
import { computed } from 'vue'
// @ts-ignore

import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const headerStore = useHeaderStore()

const close = () => {
  headerStore.burger = false
}

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
  gap: 2em;
  justify-content: center;

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
