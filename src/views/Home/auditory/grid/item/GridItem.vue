<template>
  <div class="row">
    <div class="image">
      <img src="https://kaznetpartners.com/wp-content/uploads/2021/12/dffa10eb63fedd525340ac52b609cdee-small.jpg" alt="">
    </div>
    <div class="item">
      <div class="item__box">
        <v-icon>{{ icon }}</v-icon>
        <div class="item__title">{{ title }}</div>
      </div>
      <div class="item__text">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title: String,
  icon: String,
  text: String,
})


</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;



  &__box {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: $green;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: 'Exo 2', sans-serif;
    font-size: 32px;
    margin-bottom: 20px;
  }

  &__text {
    gap: 0.5em;
    color: $black;
    text-align: justify;
    font-weight: 500;
    letter-spacing: 1px;
    font-family: 'Exo 2', sans-serif;
    font-size: 20px;
  }

}


.row {
  width: 45%;
  display: flex;
  align-items: center;
  gap: 2em;
}


.image {
  width: 200px;
  height: 200px;
  border-radius: 10px;

  & img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>