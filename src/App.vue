<script setup lang="ts">
import HeaderVue from './components/header/HeaderVue.vue'
import FooterSection from '@/components/footer/FooterSection.vue'
import PartDialog from './components/PartDialog.vue'
import { nextTick, onMounted, ref } from 'vue'
import { useHeaderStore } from './stores/headerStore'

const headerStore = useHeaderStore()

const onResize = () => {
  if (window.innerWidth < 980) {
    headerStore.isMobile = true
  } else if (window.innerWidth >= 980) {
    headerStore.isMobile = false
  }
}

onMounted(() => {
  onResize()
  nextTick(() => {
    window.addEventListener('resize', onResize)
  })


})
</script>

<template>
  <header-vue />
  <PartDialog />
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

<style lang="scss">
.main {
  flex: 1 1 auto;
}

.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
}

[class*='__container'] {
  max-width: 1400px;
  padding: 0 20px;
  margin: 0 auto;
}

.routering {
  &-enter-from {
    opacity: 0;
  }

  &-enter-active {
    transition: all 0.3s ease-out;
  }

  &-leave-to {
    opacity: 0;
  }

  &-leave-active {
    transition: all 0.3s ease-in;
  }
}

::-webkit-scrollbar {
  width: 13px;

  background-color: $white;

  &-track {
    background-color: $white;
    margin-block: 0.5em;
  }

  &-thumb {
    background-color: rgba(47, 47, 47, 0.836);
    border-radius: 100vw;
    transition: 0.4s;
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;

    &:hover {
      background-color: rgb(28, 28, 28);
      transition: 0.4s;
    }
  }
}
</style>
