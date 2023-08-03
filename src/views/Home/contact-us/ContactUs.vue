<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__info">
        <div class="contact__title">Свяжитесь с нами</div>
        <div class="contact__list">
          <div class="contact__item">
            <v-icon>mdi-map-marker</v-icon>
            <div class="contact__text">
              г. Астана, Казахстан, ул. Самал 12, 12 этаж.
            </div>
          </div>
          <div class="contact__item">
            <v-icon>mdi-phone</v-icon>
            <div class="contact__text">+7 708 425 3995</div>
          </div>
          <div class="contact__item">
            <v-icon>mdi-email</v-icon>
            <div class="contact__text">info@kaznetpartners.com <br> crewpropertyawards@gmail.com</div>
          </div>
          <div class="contact__item">
            <v-icon>mdi-link</v-icon>
            <div class="contact__text"><a href="https://kaznetpartners.com/">https://kaznetpartners.com/</a> <br> <br>
              <a href="https://fiabcica.com/">https://fiabcica.com/</a>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20023.274451006895!2d71.40814994849623!3d51.147023540920834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586c9805b2b6f%3A0x380167865c706e4c!2sAstana%20Tower!5e0!3m2!1sru!2skz!4v1691062776023!5m2!1sru!2skz"
        width="600" height="450" style="width: 600px; border: 0; border-radius: 20px; height: 450px" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.contact {
  padding: 80px 0;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__title {
    width: 100%;
    text-align: left;
    font-size: 64px;
    margin-bottom: 40px;
    font-weight: 900;
    font-family: 'Lora', serif;
    color: $black;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }

  &__item {
    font-size: 20px;
    display: flex;
    font-weight: 600;
    align-items: center;
    gap: 1em;
    font-family: 'Montserrat', sans-serif;
  }

  &__info {
    height: 450px;
    display: flex;
    flex-direction: column;
  }

  &__text a {
    color: black;
    text-decoration: underline;

    &:visited {
      color: black;
    }
  }
}

@media only screen and (max-width: 850px) {
  .contact {
    &__container {
      flex-direction: column;
      gap: 40px;
    }

    &__info {
      height: fit-content;
    }

    &__item {
      font-size: 14px;
    }

    &__title {
      font-size: 32px;
      text-align: center;
    }
  }

  .google-map {
    width: 100% !important;
    height: 200px !important;
  }
}
</style>
