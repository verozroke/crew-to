<template>
  <div class="block">
    <img :src="`/gallery/${src}`" alt="">
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

  &:hover {
    & img {
      filter: brightness(100%);
      transform: scale(1.1);
      transition: .4s;
    }
  }

  & img {
    filter: brightness(50%);
    width: 100%;
    object-position: center;
    object-fit: cover;
    transition: .4s;
    transform: scale(1);
  }
}
</style>