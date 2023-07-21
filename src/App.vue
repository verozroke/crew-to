<script setup lang="ts">
import HeaderVue from './components/header/HeaderVue.vue';
</script>

<template>
  <header-vue />
  <div class="wrapper">
    <div class="main">
      <router-view v-slot="{ Component }">
        <transition name="routering" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <FooterSection class="footer" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  flex: 1 1 auto;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #fff;
}

[class*="__container"] {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  font-style: normal;
}

body {
  overflow: overlay;
}

.routering {
  &-enter-from {
    opacity: 0;
    transform: translateX(1000px);
  }

  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-to {
    opacity: 0;
    transform: translateX(-1000px);
  }

  &-leave-active {
    transition: all 0.3s ease-in;
  }
}
</style>
