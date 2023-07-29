<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__main">
        <FooterLogo style="flex: 1 1 auto" />
        <FooterInfo />
        <FooterContacts />
      </div>
      <div class="footer__second">
        <div class="footer__rights">
          &copy; {{ new Date(Date.now()).getFullYear() }} Kazakhstan Networking Partners. Все права
          защищены.
        </div>
        <FooterMedias />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FooterLogo from './UI/FooterLogo.vue'
import FooterInfo from './info/FooterInfo.vue'
import FooterContacts from './contacts/FooterContacts.vue'
import FooterMedias from './contacts/FooterMedias.vue'
</script>

<style lang="scss" scoped>
.footer {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 40px 0 20px 0;
  background-color: $black;

  &__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    gap: 2em;
  }

  &__main {
    display: flex;
    align-items: center;
    gap: 3em;
  }

  &__second {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__rights {
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    color: $white;
  }
}
</style>
