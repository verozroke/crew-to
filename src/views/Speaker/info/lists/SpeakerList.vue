<template>
  <div class="list">
    <SpeakerCard v-for="speaker in speakers" :key="speaker.id" :name="speaker.name" :occupation="speaker.occupation"
      :imgSrc="speaker.imgSrc" :company="speaker.company" :text="speaker.text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpeakerCard from './card/SpeakerCard.vue'

const speakers = ref([
  {
    id: 1,
    name: 'Цапенкова Любовь',
    occupation: 'Partner, CEO',
    company: 'JLL France',
    text: `Любовь имеет более чем 15-летний опыт в девелопменте и
управлении коммерческой недвижимостью, она работала в
компаниях Mandarin Plaza, JLL (Украина и Франция), DCH,
Argo Real Estate Opportunities Fund, DGL Group, КВЦ
«Парковый».`,
    imgSrc: '/crew-to/speakers/speaker-1.png'
  },
  {
    id: 2,
    name: 'Леонид Волох',
    occupation: 'Генеральный директор, Соучредитель',
    company: 'CPM IREM',
    text: 'Более 25 лет опыта в области управления и эксплуатации недвижимости. Основатель и соучредитель Lynks Property Management.',
    imgSrc: '/crew-to/speakers/speaker-2.jpg'
  },
  {
    id: 3,
    name: 'Евгений Бумагин',
    occupation: 'Генеральный директор IBC Real Estate в Казахстане',
    company: 'IBC Real Estate',
    text: `Евгений работает в сфере складской недвижимости более 16 лет. За это
время он успел внести весомый вклад в развитие крупнейшей на тот момент
девелоперской компании ESPRO, а в 2010 г. стать частью команды российского
подразделения международной сети JLL.`,
    imgSrc: '/crew-to/speakers/speaker-3.jpg'
  },
  {
    id: 4,
    name: 'Жанар Тусупканова',
    occupation: 'генеральный директор управляющей компании бизнес-центра «Astana Tower»',
    company: 'Astana Tower',
    text: 'Профессиональный опыт работы свыше 20 лет в коммерческой недвижимости в сфере комплексного управления, брокериджа и эксплуатации коммерческой недвижимости, ведению сложных проектов, настройке и оптимизации бизнес-процессов.',
    imgSrc: '/crew-to/speakers/speaker-4.jpg'
  },

])
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  align-items: center;
  justify-content: center;
}

@media only screen and (max-width: 666px) {
  .list {
    width: 300px !important;
  }
}
</style>
