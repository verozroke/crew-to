<template>
  <div class="program">
    <div class="program__container">
      <div class="program__title">Стало интересно?</div>
      <div class="program__subtitle">Просим вас ознакомиться с программой нашего мероприятия:</div>
      <div style="display: flex; align-items: center; gap: 3em;">
        <a href="https://drive.google.com/drive/u/0/folders/1QbDk1od0JaAfsTzh5ON04xSXNdcb__2-">
          <v-btn color="#ffc14d" rounded="0"
            style="width: 300px;color: #284240;   font-weight: 700;  font-family: 'Exo 2', sans-serif;"
            size="large">Скачать
            программу</v-btn>
        </a>
        <div style="    font-size: 32px;
    font-weight: 700;
    line-height: 1.2em;
    font-family: 'Exo 2', sans-serif;
    color: #f7f7f7;
    padding-bottom: 10px;">
          или
        </div>
        <v-btn color="#ffc14d" variant="outlined" rounded="0" @click="openDialog"
          style="width: 300px; font-weight: 700; font-family: 'Exo 2', sans-serif;" size="large">Стать
          партнером ивента</v-btn>
        <ProgramDialog />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProgramDialog from './dialog/ProgramDialog.vue'
import { useProgramStore } from '../../../stores/programStore'


const programStore = useProgramStore()



const openDialog = () => {
  programStore.changeDialog()
}

</script>

<style lang="scss" scoped>
.program {
  padding: 40px 0;
  background-color: $black;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  &__title {
    width: 100%;
    font-size: 64px;
    margin-bottom: 80px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $gold;
  }

  &__subtitle {
    color: $white;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2em;
    font-family: 'Exo 2', sans-serif;
  }
}
</style>  