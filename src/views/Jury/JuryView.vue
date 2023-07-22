<template>
  <div id="Jury" class="jury">
    <JuryTitle />
    <JuryList />
  </div>
</template>

<script setup lang="ts">
import JuryTitle from './title/JuryTitle.vue'
import JuryList from './list/JuryList.vue'
</script>

<style lang="scss" scoped>
.jury {
  display: flex;
  flex-direction: column;
  gap: 2em;
}
</style>
