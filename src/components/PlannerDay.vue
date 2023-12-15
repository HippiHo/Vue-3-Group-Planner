<script setup lang="ts">
import { ref } from "vue";
import type { Day } from "../types/calendar.types";
import { useExcludeStore } from '@/stores/exclude'

const props = defineProps<{
  day: Day;
  weekdayIsExcluded: boolean
}>();

const store = useExcludeStore()

const isVisible = ref<boolean>(true);

const toggleDayOpacity = () => {
  if (!store.excludedWeekdays?.some(item => item === props.day.weekDay)) {
    isVisible.value = !isVisible.value
  }
};

</script>

<template>
  <div class="day" :class="{
    weekend: day.isWeekend,
    workDay: !day.isWeekend,
    hidden: !isVisible || weekdayIsExcluded,
  }" @click="toggleDayOpacity">
    <span class="weekDay">{{ day.weekDay }}</span>
    <span class="number">{{ day.number }}</span>
  </div>
</template>

<style lang="scss" scoped>
.day {
  border: 1px solid black;
  height: 100px;
  opacity: 1;
  padding: 8px 32px 8px 8px;
  transition: opacity linear 0.2s;

  .weekDay {
    display: block;
  }

  .number {
    font-weight: 700;
    display: block;
    text-align: right;
    font-size: 26px;
  }
}

.workDay {
  background-color: lightsalmon;
}

.weekend {
  background-color: lightgray;
}

.hidden {
  opacity: 0.2;
}
</style>
