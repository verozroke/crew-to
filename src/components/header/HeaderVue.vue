<template>
  <div class="header">
    <div class="header__container">
      <HeaderLogo />
      <HeaderNavbar />
      <HeaderButton />
      <LanguageButton />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderLogo from './UI/HeaderLogo.vue'
import HeaderNavbar from './navbar/HeaderNavbar.vue'
import HeaderButton from './UI/HeaderButton.vue'
import LanguageButton from '../LanguageButton.vue';
</script>

<style lang="scss" scoped>
.header {
  // border: 1px solid $black;
  background-color: white;
  font-family: 'Exo 2', sans-serif;
  position: sticky;
  top: 0;
  z-index: 999;

  filter: drop-shadow(0.5em 0em 0.5em rgba(110, 110, 110, 0.349));

  &__container {
    gap: 2em;
    display: flex;
    align-items: center;
    height: 100%;
  }

  height: 60px;
}
</style>
