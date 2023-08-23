<template>
  <div>
    <v-btn
      @click="headerStore.burger = true"
      icon="mdi-menu"
      variant="tonal"
      :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'"
    ></v-btn>
    <v-dialog
      v-model="headerStore.burger"
      fullscreen
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          :color="headerStore.isCrewAwards ? '#1B1A17' : '#f7f7f7'"
          style="transition: 0.4s"
        >
          <div class="toolbar">
            <v-btn
              icon="mdi-close"
              variant="text"
              :color="headerStore.isCrewAwards ? '#ffc14d' : '#32cc98'"
              @click="headerStore.burger = false"
            ></v-btn>
          </div>
        </v-toolbar>
        <div class="body" :style="{ backgroundColor: backgroundColoring }">
          <BurgerNavbar />
          <BurgerButton />
          <BurgerLanguageButton />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BurgerNavbar from './childs/BurgerNavbar.vue'
import BurgerButton from './childs/BurgerButton.vue'
import BurgerLanguageButton from './childs/BurgerLanguageButton.vue'
import { useHeaderStore } from '@/stores/headerStore'
import { computed } from 'vue'

const headerStore = useHeaderStore()

const backgroundColoring = computed(() => {
  return headerStore.isCrewAwards ? '#1B1A17' : '#f7f7f7'
})
</script>

<style lang="scss" scoped>
.toolbar {
  padding: 0 20px;
  display: flex;
  width: 100%;
  justify-content: end;
}

.body {
  transition: 0.4s;
  padding: 0 40px;
  display: flex;
  height: 100%;
  width: 100%;
  gap: 2em;
  justify-content: center;
  flex-direction: column;
  background-color: v-bind(backgroundColoring);
}
</style>
