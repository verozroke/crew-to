<template>
  <div class="row">
    <div class="tabs">
      <v-tabs v-model="tab" direction="vertical" color="#32cc98">
        <v-tab width="466px" style="font-size: 24px; font-weight: 700; text-transform: none" value="option-1">
          Цель 1
        </v-tab>
        <v-tab width="466px" style="font-size: 24px; font-weight: 700; text-transform: none" value="option-2">
          Цель 2
        </v-tab>
        <v-tab width="466px" style="font-size: 24px; font-weight: 700; text-transform: none" value="option-3">
          Цель 3
        </v-tab>
      </v-tabs>
    </div>
    <v-window v-model="tab">
      <v-window-item value="option-1">
        <WindowItem title="Цель 1"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi adipisci odio optio perspiciatis corrupti officiis iste qui quibusdam animi!"
          src="https://images.unsplash.com/photo-1689910708106-cc1cb6d71dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
      </v-window-item>
      <v-window-item value="option-2">
        <WindowItem title="Цель 2"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi adipisci odio optio perspiciatis corrupti officiis iste qui quibusdam animi!"
          src="https://images.unsplash.com/photo-1689910708106-cc1cb6d71dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
      </v-window-item>
      <v-window-item value="option-3">
        <WindowItem title="Цель 3"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi adipisci odio optio perspiciatis corrupti officiis iste qui quibusdam animi!"
          src="https://images.unsplash.com/photo-1689910708106-cc1cb6d71dff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WindowItem from './item/WindowItem.vue'



const tab = ref('')




</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;

}


.tabs {
  display: flex;
  flex-direction: column;
  height: 400px;
  font-family: 'Montserrat', sans-serif;
  margin-right: 20px;
}
</style>