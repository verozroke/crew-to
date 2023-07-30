<template>
  <div>
    <v-btn @click="dialog = true" icon="mdi-menu" variant="tonal" color="#32cc98"></v-btn>
    <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar color="#f7f7f7">
          <div class="toolbar"><v-btn icon="mdi-close" variant="text" color="#32cc98" @click="dialog = false"></v-btn>
          </div>
        </v-toolbar>
        <div class="body">
          <HeaderNavbar />
          <HeaderButton />
          <LanguageButton />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderNavbar from '../navbar/HeaderNavbar.vue'
import HeaderButton from '../UI/HeaderButton.vue'
import LanguageButton from '../../LanguageButton.vue'


const dialog = ref(false)

</script>

<style lang="scss" scoped>
.toolbar {
  padding: 0 20px;
  display: flex;
  width: 100%;
  justify-content: end;
}

.body {
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: $white;
}
</style>