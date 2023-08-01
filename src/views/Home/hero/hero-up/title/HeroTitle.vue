<template>
  <div class="title">
    <div class="title__upper">
      <div class="title__upper-title upper-title hidden">CREW</div>
    </div>
    <div class="title__bottom bottom-title hidden">Central Asia 2023</div>
    <div class="title__bottom-2 bottom-2-title hidden">GREEN&SMART Development</div>
  </div>
</template>

<script setup lang="ts">
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
  let hiddenTitleElements = document.querySelectorAll('.upper-title.hidden')
  let hiddenBottomTitleElements = document.querySelectorAll('.bottom-title.hidden')
  let hiddenBottom2TitleElements = document.querySelectorAll('.bottom-2-title.hidden')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [
    ...hiddenTitleElements,
    ...hiddenBottomTitleElements,
    ...hiddenBottom2TitleElements
  ]
  hiddenElements.forEach((hiddenElement) => {
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
    line-height: 0.8em;
    font-size: 120px;
    letter-spacing: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    color: $white;

    &.hidden {
      opacity: 0;
      transition: all 1.5s;
      filter: blur(20px);
      transform: translateY(-100px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateY(0%);
    }
  }

  &__bottom {
    padding-left: 10px;
    color: $white;
    line-height: 1.2em;
    font-size: 64px;
    letter-spacing: 5px;
    font-family: 'Lora', serif;
    font-weight: 500;

    &-2 {
      padding-left: 15px;
      color: $green;
      line-height: 1.2em;
      font-size: 32px;
      letter-spacing: 5px;
      font-family: 'Lora', serif;
      font-weight: 500;

      &.hidden {
        opacity: 0;
        transition: all 2.5s;
        filter: blur(20px);
        transform: translateX(-300px);
      }

      &.show {
        filter: blur(0);
        opacity: 1;
        transform: translateX(0%);
      }
    }

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

@media only screen and (max-width: 1282px) {
  .title {
    padding: 40px 0;
    align-items: center;

    &__bottom {
      padding: 0;
      text-align: center !important;

      &-2 {
        padding: 0;

        text-align: center !important;
      }
    }
  }
}

@media only screen and (max-width: 674px) {
  .title {
    padding: 40px 0;
    align-items: center;

    &__upper-title {
      font-size: 60px;
      line-height: 1.2em;
    }

    &__bottom {
      font-size: 32px;
      line-height: 1.2em;

      &-2 {
        font-size: 24px;
        line-height: 1.2em;
      }
    }
  }
}
</style>
