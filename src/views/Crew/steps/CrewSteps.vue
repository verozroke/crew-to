<template>
  <div class="timeline-unique">
    <v-timeline direction="horizontal" side="end" line-inset="12">
      <v-timeline-item dot-color="#ffc14d" fill-dot>
        <template v-slot:opposite>
          <div class="timeline-text">Защита проектов, голосование, подведение итогов</div>
        </template>
        <div class="timeline-time">25.09.2023 - 13.10.2023</div>
      </v-timeline-item>

      <v-timeline-item dot-color="#ffc14d" fill-dot>
        <template v-slot:opposite>
          <div class="timeline-text" style="f">Первое заседание Конкурсной Комиссии</div>
        </template>

        <div class="timeline-time">01.09.2023- 22.09.2023</div>
      </v-timeline-item>

      <v-timeline-item dot-color="#ffc14d" fill-dot>
        <template v-slot:opposite>
          <div class="timeline-text">Прием анкет по всем номинациям премии</div>
        </template>

        <div class="timeline-time" style="">01.07.2023 - 31.08.2023</div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.timeline-unique {
  padding: 100px 0;
  background-color: #1b1a17;
}

.timeline-text {
  font-family: 'Montserrat', serif;
  font-size: 24px;
  color: #f7f7f7;
  font-weight: 600;
  text-align: center !important;
}

.timeline-time {
  font-family: 'Lora', serif;
  font-size: 24px;
  color: #ffc14d;
  font-weight: 800;
  text-align: center !important;
}

.timeline-unique .v-timeline-divider__before {
  width: calc(100% + 12px) !important;
  background-color: #fff;
}

.timeline-unique .v-timeline-divider__after {
  background-color: #fff;
}

@media only screen and (max-width: 658px) {
  .timeline-time {
    font-size: 15px !important;
  }

  .timeline-text {
    font-size: 15px !important;
  }
}

@media only screen and (max-width: 428px) {
  .timeline-time {
    font-size: 10px !important;
  }

  .timeline-text {
    font-size: 10px !important;
  }
}
</style>
