<template>
  <v-dialog v-model="ticketStore.dialog" width="auto">
    <v-card>
      <div class="upper">
        <v-card-title class="title"> Купить билет </v-card-title>
        <div @click="ticketStore.dialog = false" class="close">
          <v-btn variant="text" icon="mdi-close"></v-btn>
        </div>
      </div>
      <iframe
        width="1024"
        height="768"
        src=" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwNzMwMjh9CTQ4NDM3NzY3MDc2NDYJOTQwZGM2NWNkYjFlNDU0Y2QzYzhmZDIyNDRjY2NlNDZiOGQ4M2E2YjhmZTFlNTQyMjBmNjU3NWIyOGJkNjYwOA== "
        frameborder="0"
      ></iframe>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useTicketStore } from '../../../../stores/ticketStore'

const ticketStore = useTicketStore()
</script>

<style lang="scss" scoped>
.upper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.title {
  font-weight: 900;
  font-family: 'Lora', serif;
  color: $black;
}
</style>
