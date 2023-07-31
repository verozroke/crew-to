<template>
  <v-expansion-panels>
    <v-expansion-panel color="#343432" v-for="item in items" :key="item.id">
      <v-expansion-panel-title color="#ffc14d"
        style="display: flex; align-items: center; gap: 1em; font-family: 'Montserrat', sans-serif;font-family: 'Montserrat', sans-serif;">
        <v-icon>mdi-trophy-award</v-icon>
        <div style="letter-spacing: 1px; font-weight: 700; font-size: 18px;" class="title">
          {{ item.title }}
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text class="text">
        <div class="text-inner">
          {{ item.text }}
        </div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang="ts">


type TypeNomination = {
  id: number;
  title: string;
  text: string;
}


defineProps<{
  items: TypeNomination[]
}>()

</script>

<style lang="scss" scoped>
.text {
  background-color: #343432;
  color: $gold;
  // padding: 40px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;

  &-inner {
    padding: 40px 20px;
    white-space: pre-line;
  }
}


@media only screen and (max-width: 608px) {
  .title {
    font-size: 16px !important;
  }

  .text {
    font-size: 14px !important;
  }
}


@media only screen and (max-width: 500px) {

  .title {
    font-size: 14px !important;
  }

  .text {
    font-size: 12px !important;
  }

}
</style>