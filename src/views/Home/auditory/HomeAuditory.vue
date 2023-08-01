<template>
  <div class="auditory">
    <div class="auditory__container">
      <div class="auditory__title">Что вы получите от посещения Конференции?</div>
      <div class="row">
        <AuditoryGrid />
        <div class="info">
          <div class="info__image">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/453787532.jpg?k=33c31fc80a87fdf4f8a4d08fd1a3df8bd60ac3918106a10140e29f7a9705e293&o=&hp=1"
              alt="Auditory More Image"
            />
          </div>
          <div class="info__text">
            Ждём Вас 18 октября в отеле "The Ritz-Carlton Carlton Almaty" на ежегодном
            Центрально-Азиатском форуме "Crew Central Asia"!
          </div>
          <div
            class="button-row"
            style="
              display: flex;
              gap: 1em;
              width: 100%;
              align-items: end;
              justify-content: space-between;
            "
          >
            <v-btn
              color="#284240"
              class="button"
              rounded="0"
              style="
                width: 300px;
                color: #ffc14d;
                font-weight: 700;
                font-family: 'Montserrat', sans-serif;
              "
              @click="downloadProgram"
              size="large"
              >Скачать программу</v-btn
            >
            <v-btn
              color="#32cc98"
              class="button"
              variant="outlined"
              rounded="0"
              @click="openDialog"
              style="width: 300px; font-weight: 700; font-family: 'Montserrat', sans-serif"
              size="large"
              >Стать партнером ивента</v-btn
            >
            <ProgramDialog />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuditoryGrid from './grid/AuditoryGrid.vue'
import ProgramDialog from './dialog/ProgramDialog.vue'
import { useProgramStore } from '../../../stores/programStore'

const programStore = useProgramStore()

const downloadProgram = () => {
  const link = document.createElement('a')

  link.setAttribute('href', '/crew-to/storage/program.pdf')
  link.download = 'Программа CREW Central Asia 2023.pdf'

  link.click()
}

const openDialog = () => {
  programStore.changeDialog()
}
</script>

<style lang="scss" scoped>
.auditory {
  padding: 80px 0;

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__title {
    width: 100%;
    font-size: 64px;
    margin-bottom: 80px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }
}

.row {
  height: 100%;
  display: flex;
  gap: 30px;
}

.info {
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__image {
    width: 100%;
    height: 200px;

    & img {
      width: 100%;
      height: 100%;
      border-radius: 1em;
      object-fit: cover;
    }
  }

  &__text {
    color: $black;
    text-align: justify;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
  }
}

@media only screen and (max-width: 1300px) {
  .row {
    flex-direction: column;
  }

  .info {
    width: 100%;
    align-items: center;

    &__text {
      width: 100%;
    }
  }

  .button-row {
    justify-content: center !important;
  }
}

@media only screen and (max-width: 850px) {
  .auditory {
    &__title {
      font-size: 32px;
    }
  }

  .info {
    &__text {
      font-size: 16px;
    }
  }

  .button {
    font-size: 10px !important;
    width: 200px !important;
  }
}

@media only screen and (max-width: 430px) {
  .button-row {
    flex-direction: column;
    align-items: center !important;
  }
}
</style>
