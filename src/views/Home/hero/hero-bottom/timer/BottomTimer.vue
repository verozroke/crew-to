<template>
  <div class="timer">
    <div class="timer__box">
      <div class="timer__digit">{{ displayDays }}</div>
      <div class="timer__title">Дней</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit">{{ displayHours }}</div>
      <div class="timer__title">Часов</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit">{{ displayMinutes }}</div>
      <div class="timer__title">Минут</div>
    </div>
    <div class="timer__box">
      <div class="timer__digit">{{ displaySeconds }}</div>
      <div class="timer__title">Секунд</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue'

const displayDays: Ref<string | number> = ref('')
const displayHours: Ref<string | number> = ref('')
const displayMinutes: Ref<string | number> = ref('')
const displaySeconds: Ref<string | number> = ref('')

const _seconds = computed(() => 1000)
const _minutes = computed(() => _seconds.value * 60)
const _hours = computed(() => _minutes.value * 60)
const _days = computed(() => _hours.value * 24)


const showRemaining = () => {
  const timer = setInterval(() => {
    const now = new Date();
    const end = new Date(2023, 9, 18, 9, 30)

    const distance = end.getTime() - now.getTime()


    if (distance < 0) {
      clearInterval(timer)
      return
    }


    const days = Math.floor(distance / _days.value)

    const hours = Math.floor((distance % _days.value) / _hours.value);
    const minutes = Math.floor((distance % _hours.value) / _minutes.value);
    const seconds = Math.floor((distance % _minutes.value) / _seconds.value);
    displayMinutes.value = minutes < 10 ? "0" + minutes : minutes;
    displaySeconds.value = seconds < 10 ? "0" + seconds : seconds;
    displayHours.value = hours < 10 ? "0" + hours : hours;
    displayDays.value = days < 10 ? "0" + days : days;
  }, 1000)
}



onMounted(() => {
  showRemaining()
})

</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  width: fit-content;
  justify-content: center;
  gap: 2em;

  &__box {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  &__title {
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    color: $white;
    letter-spacing: 1px;
    font-family: 'Montserrat', sans-serif;
  }

  &__digit {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    letter-spacing: 2px;
    font-weight: 900;
    font-family: 'Lora', serif;
    text-align: center;
    color: $white;
    border-radius: .1em;
    border: 2px solid $white;
    height: 150px;
    width: 125px;
  }
}
</style>