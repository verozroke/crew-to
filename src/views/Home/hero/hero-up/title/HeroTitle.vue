<template>
  <div class=" title ">
    <div class="title__upper ">
      <div class="title__upper-title upper-title hidden">
        CREW
      </div>
      <TitleTime />
    </div>
    <div class="title__bottom bottom-title hidden">Central Asia 2024.</div>
  </div>
</template>

<script setup lang="ts">
import TitleTime from './time/TitleTime.vue'

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

setTimeout(() => {
  // let hiddenSubtitleElements = document.querySelectorAll('.hero__subtitle.hidden')
  let hiddenTitleElements = document.querySelectorAll('.upper-title.hidden')
  let hiddenBottomTitleElements = document.querySelectorAll('.bottom-title.hidden')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTitleElements, ...hiddenBottomTitleElements]
  hiddenElements.forEach(hiddenElement => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  padding-bottom: 60px;


  &__upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  &__upper-title {
    line-height: 1.2em;
    font-size: 120px;
    letter-spacing: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: $white;

    &.hidden {
      opacity: 0;
      transition: all 1s;
      filter: blur(20px);
      transform: translateX(-500px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateY(0%);
    }
  }

  &__bottom {
    color: $white;
    line-height: 1.2em;
    font-size: 82px;
    letter-spacing: 5px;
    font-family: 'Lora', serif;
    font-weight: 500;

    &.hidden {
      opacity: 0;
      transition: all 1s;
      filter: blur(20px);
      transform: translateX(-500px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateY(0%);
    }
  }
}
</style>