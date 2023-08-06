<template>
  <div class="block">
    <img :src="src" alt="Gallery Photo" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: String
})
</script>

<style lang="scss" scoped>
.block {
  width: 50%;
  max-width: 50%;
  position: relative;
  overflow: hidden;
  height: 380px;

  &:hover {
    & img {
      filter: brightness(100%);
      transform: scale(1.1);
      transition: 0.4s;
    }
  }

  & img {
    filter: brightness(50%);
    width: 100%;
    height: 380px;
    object-fit: cover;
    transition: 0.4s;
    transform: scale(1);
  }
}

@media only screen and (max-width: 750px) {
  .block {
    width: 100%;
    max-width: 100%;

    & img {
      filter: brightness(100%);
      transform: scale(1);
      transition: 0.4s;
    }
  }
}
</style>
