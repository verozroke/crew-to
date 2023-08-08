<template>
  <div class="text-box hidden">
    <div class="button-row" style="display: flex; align-items: center; gap: 1em">
      <!-- <TextButton /> -->
      <TitleTime />
    </div>
    <div class="city"><v-icon>mdi-domain</v-icon>Алматы</div>
    <div class="adress"><v-icon>mdi-map-marker</v-icon>проспект Aль-Фараби 77/7</div>
  </div>
</template>

<script setup lang="ts">
import TextButton from './TextButton.vue'
import TitleTime from '../title/time/TitleTime.vue'

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
  let hiddenTextElements = document.querySelectorAll('.text-box.hidden')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTextElements]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss" scoped>
.adress {
  text-align: end;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-family: 'Montserrat', sans-serif;
}

.city {
  text-align: end;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-family: 'Montserrat', sans-serif;
}

.text {
  width: 400px;
  font-family: 'Montserrat', sans-serif;

  &-box {
    gap: 0.5em;
    text-align: justify;
    font-weight: 700;
    flex: 1 1 auto;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    color: $white;
    padding-bottom: 155px;
    padding-right: 90px;
    justify-content: end;
    line-height: 1.2em;
    align-items: end;
    // padding-bottom: 55px;

    &.hidden {
      opacity: 0;
      transition: all 1.5s;
      filter: blur(20px);
      transform: translateX(300px);
    }

    &.show {
      filter: blur(0);
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media only screen and (max-width: 1282px) {
  .text {
    &-box {
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
      padding-right: 0;
    }
  }

  .button-row {
    flex-direction: column;
  }
}

@media only screen and (max-width: 674px) {
  .city {
    font-size: 18px;
    text-align: center;
  }

  .adress {
    font-size: 18px;
    text-align: center;
  }
}
</style>
