<template>
  <div class="jury">
    <div class="jury__container">
      <div class="jury__title">Жюри мероприятия</div>
      <div class="jury__list">
        <JuryItem v-for="jury in juries" :key="jury.id" :name="jury.name" :occupation="jury.occupation"
          :company="jury.company" :text="jury.text" :img="jury.img" :reverse="jury.reverse" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JuryItem from './item/JuryItem.vue'



const juries = ref([
  {
    id: 1,
    name: 'Огуречкин Иван',
    occupation: 'Строитель',
    company: 'ТОО Ak Didar',
    text: 'Огуречкин Иван - достойный кандидат мастера спорта по пинпонгу. Он умеет Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aut a amet perspiciatis obcaecati molestiae debitis cupiditate quae, laudantium quia?',
    img: 'https://media.glamour.com/photos/56957dc55fff94d44eec1d9b/master/pass/entertainment-2013-09-saul-breaking-bad-main.jpg',
    reverse: false,
  },
  {
    id: 2,
    name: 'Огуречкин Иван',
    occupation: 'Строитель',
    company: 'ТОО Ak Didar',
    text: 'Огуречкин Иван - достойный кандидат мастера спорта по пинпонгу. Он умеет Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aut a amet perspiciatis obcaecati molestiae debitis cupiditate quae, laudantium quia?',
    img: 'https://media.glamour.com/photos/56957dc55fff94d44eec1d9b/master/pass/entertainment-2013-09-saul-breaking-bad-main.jpg',
    reverse: true,
  },
  {
    id: 3,
    name: 'Огуречкин Иван',
    occupation: 'Строитель',
    company: 'ТОО Ak Didar',
    text: 'Огуречкин Иван - достойный кандидат мастера спорта по пинпонгу. Он умеет Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut aut a amet perspiciatis obcaecati molestiae debitis cupiditate quae, laudantium quia?',
    img: 'https://media.glamour.com/photos/56957dc55fff94d44eec1d9b/master/pass/entertainment-2013-09-saul-breaking-bad-main.jpg',
    reverse: false,
  }
])
</script>

<style lang="scss" scoped>
.list {


  &__container {}
}


.jury {
  padding: 40px 0;
  background-color: #000;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 4em;
  }

  &__title {
    font-size: 64px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $gold;
  }

  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;
  }
}
</style>
