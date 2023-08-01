<template>
  <v-parallax
    src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    class="hero"
  >
    <div class="hero__overlay">
      <div class="hero__container">
        <div class="hero__logo">
          <img src="/awards-hero/logo.png" alt="Hero Logo CREW Awards Central Asia 2023" />
        </div>
        <div class="hero__buttons">
          <v-btn
            width="250px"
            size="large"
            variant="outlined"
            color="#ffc14d"
            rounded="0"
            style="font-weight: 500; font-family: 'Montserrat', sans-serif"
            @click="programStore.dialog = true"
            >Стать партнером</v-btn
          >
          <v-btn
            width="250px"
            size="large"
            color="#ffc14d"
            rounded="0"
            class="text-black"
            style="font-weight: 500; font-family: 'Montserrat', sans-serif"
            @click="ticketStore.dialog = true"
            >Купить билет</v-btn
          >
          <v-btn
            width="250px"
            size="large"
            variant="outlined"
            color="#ffc14d"
            rounded="0"
            style="font-weight: 500; font-family: 'Montserrat', sans-serif"
            @click="partStore.dialog = true"
            >Подать заявку</v-btn
          >
        </div>
        <CrewSteps />
        <v-btn
          icon="mdi-arrow-down"
          variant="text"
          @click="moveDown('about-forum')"
          style="font-size: 24px; color: #7a7a7a; position: absolute; bottom: 30px"
        >
          <v-icon></v-icon>
        </v-btn>
      </div>
    </div>
    <part-dialog />
    <TicketDialog />
    <PartnerDialog />
  </v-parallax>
</template>

<script setup lang="ts">
import PartDialog from '@/components/PartDialog.vue'
import TicketDialog from '@/views/Home/tickets/dialog/TicketDialog.vue'
import PartnerDialog from './dialog/PartnerDialog.vue'
import { useProgramStore } from '@/stores/programStore'
import { useTicketStore } from '@/stores/ticketStore'
import { usePartStore } from '@/stores/partStore'

const programStore = useProgramStore()
const ticketStore = useTicketStore()
const partStore = usePartStore()

const moveDown = (blockID: string) => {
  const $block = document.getElementById(blockID)
  $block?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<style lang="scss" scoped>
.hero {
  height: calc(100vh - 60px);
  position: relative;

  &__overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.507);
  }

  &__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5em;
    justify-content: center;
    align-items: center;
  }

  &__buttons {
    display: flex;
    gap: 2em;
  }
}

@media only screen and (max-width: 860px) {
  .hero {
    &__logo {
      width: 500px;
      height: 195px;

      & img {
        width: 100%;
      }
    }

    &__buttons {
      flex-direction: column;
      gap: 1em;
    }
  }
}

@media only screen and (max-width: 520px) {
  .hero {
    &__container {
      gap: 2em;
    }

    &__logo {
      width: 100%;

      & img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
