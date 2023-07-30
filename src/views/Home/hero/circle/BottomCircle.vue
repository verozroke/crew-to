<template>
  <div class="circle hidden">
    <img
      src="https://images.adsttc.com/media/images/5c2e/c5e8/08a5/e5b3/9100/002e/newsletter/VCA_-_SOPREMA_-_PICTURE_-_001.jpg?1546569157"
      alt="Circle Image" />
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
  let hiddenTimerElements = document.querySelectorAll('.circle.hidden')
  // let hiddenTextElements = document.querySelectorAll('.hero__text.hidden')
  let hiddenElements = [...hiddenTimerElements]
  hiddenElements.forEach((hiddenElement) => {
    observer.observe(hiddenElement)
  })
}, 0)
</script>

<style lang="scss" scoped>
.circle {
  background-color: $white;
  height: 1500px;
  width: 1500px;
  border-radius: 50%;

  &.hidden {
    opacity: 0;
    transition: all 2s;
    filter: blur(20px);
    transform: translateY(300px) translateX(300px);
  }

  &.show {
    filter: blur(0);
    opacity: 1;
    transform: translateY(0) translateX(0);
  }

  & img {
    width: 1500px;
    height: 1500px;
    object-fit: contain;
    object-position: 100px -300px;
    border-radius: 50%;
  }
}
</style>
