<template>
  <div class="time hidden">
    <div class="time__begin">День мероприятия:</div>
    <div class="time__numbers">18.10</div>
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
  let hiddenTitleElements = document.querySelectorAll('.time.hidden')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTitleElements]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss" scoped>
.time {
  &.hidden {
    opacity: 0;
    transition: all 1.5s;
    filter: blur(20px);
    transform: translateY(-200px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0%);
  }

  display: flex;
  flex-direction: column;
  margin-right: 35px;
  height: 100px;
  background-color: $green;
  color: $white;
  width: 250px;
  padding: 10px;

  &__begin {
    font-family: 'Lora', serif;
    font-weight: 700;
    font-size: 14px;
  }

  &__numbers {
    // font-family: 'Lora', serif;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    letter-spacing: 10px;
    font-size: 64px;
  }
}
</style>
