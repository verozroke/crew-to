<template>
  <div class="info">
    <div class="info__title">О нас</div>
    <div class="info__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam error explicabo
      magni, quos nobis voluptatum eum voluptatibus ab. Vel labore quo nam unde assumenda natus illum aliquam tenetur
      earum voluptates voluptate, beatae, aliquid delectus laborum voluptatem minus est impedit provident voluptas quam,
      magni suscipit repellendus fuga minima! Cumque, commodi.</div>
    <div class="info__image"><img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt=""></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 50%;

  &__title {
    font-size: 64px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }

  &__text {
    font-size: 18px;
    letter-spacing: 1px;
    font-family: 'Exo 2', sans-serif;
    width: 100%;
    text-align: justify;
    color: $black;
    line-height: 1.2em;
  }

  &__image {
    height: 200px;
    width: 100%;

    & img {
      width: 100%;
      height: 200px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
}
</style>