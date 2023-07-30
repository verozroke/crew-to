<template>
  <div class="about" id="about-forum">
    <div class="about__container">
      <div class="about__title">О форуме</div>
      <div class="about__info">
        <div class="about__text">
          <div>
            Премия CREW Central Asia - это ежегодная профессиональная награда, предназначенная для
            выдающихся проектов недвижимости в регионе Центральной Азии. Она служит признанием
            инноваций, качества, устойчивости и социальной значимости проектов, вносящих
            существенный вклад в развитие отрасли.
          </div>
          <div>
            Цель премии заключается в поощрении и поддержке выдающихся достижений в области
            недвижимости Центральной Азии. Программа премии выделяет проекты, превосходящие
            стандартные показатели, и оказывающие положительное влияние на общество и окружающую
            среду. Она стимулирует инновационность, качество и устойчивость в создании новых
            пространств и инфраструктурного развития.
          </div>
          <div>
            Победители получают заслуженное признание, репутационные преимущества и возможность
            установления новых партнерских связей. Более того, участие в премии способствует
            расширению сети контактов и обмену опытом с ведущими профессионалами недвижимости
            Центральной Азии.
          </div>
        </div>
        <div class="about__image">
          <img
            src="https://kaznetpartners.com/wp-content/uploads/2019/05/IMG_8963-768x512.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="about__buttons">
        <v-btn
          size="large"
          color="#ffc14d"
          rounded="0"
          class="text-black"
          prepend-icon="mdi-book-clock-outline"
          style="font-weight: 500; font-family: 'Montserrat', sans-serif"
          @click="downloadProgram"
          >Программа форума</v-btn
        >
        <v-btn
          size="large"
          color="#ffc14d"
          rounded="0"
          class="text-black"
          prepend-icon="mdi-file-delimited"
          style="font-weight: 500; font-family: 'Montserrat', sans-serif"
          @click="downloadUstav"
          >Устав форума</v-btn
        >
        <!-- Program Button -->
        <!-- Ustav Button -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const downloadProgram = () => {
  const link = document.createElement('a')

  link.setAttribute('href', '/crew-to/storage/program.pdf')
  link.download = 'Программа CREW Central Asia 2023.pdf'

  link.click()
}

const downloadUstav = () => {
  const link = document.createElement('a')

  link.setAttribute('href', '/crew-to/storage/ustav.pdf')
  link.download = 'Устав CREW Awards.pdf'

  link.click()
}
</script>

<style lang="scss" scoped>
.about {
  padding: 80px 0;
  background-color: #1b1a17;

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

  &__info {
    display: flex;
    gap: 5em;
  }

  &__image {
    width: 40%;
    height: 400px;

    & img {
      border-radius: 1em;
      height: 400px;
      width: 100%;
      object-fit: cover;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: space-between;

    & > div {
      font-size: 16px;
      letter-spacing: 1px;
      font-family: 'Montserrat', sans-serif;
      width: 100%;
      list-style-type: square;
      text-align: justify;
      color: $white;
      line-height: 1.2em;
      font-weight: 500;
    }
  }

  &__buttons {
    display: flex;
    gap: 2em;
  }
}
</style>
