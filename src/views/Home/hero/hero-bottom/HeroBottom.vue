<template>
  <div class="bottom">
    <div class="bottom__container bottom-timer hidden">
      <div class="bottom__title">До начала конференции:</div>
      <BottomTimer />
    </div>
  </div>
</template>

<script setup lang="ts">
import BottomTimer from './timer/BottomTimer.vue'

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

setTimeout(() => {
  // let hiddenSubtitleElements = document.querySelectorAll('.hero__subtitle.hidden')
  let hiddenTimerElements = document.querySelectorAll('.bottom-timer.hidden')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTimerElements]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss" scoped>
.bottom {
  height: 50%;
  background-color: $black;
  padding: 20px 0;

  &__title {
    font-size: 64px;
    font-weight: 900;
    font-family: 'Lora', serif;
    text-align: left;
    color: $white;
  }

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;

    &.hidden {
      opacity: 0;
      transition: all 2s;
      filter: blur(20px);
      transform: translateY(300px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media only screen and (max-width: 1282px) {
  .bottom {
    &__container {
      gap: 2em;
      align-items: center;
    }

    &__title {
      text-align: center;
    }
  }
}

@media only screen and (max-width: 674px) {
  .bottom {
    &__title {
      font-size: 32px;
    }
  }
}
</style>
