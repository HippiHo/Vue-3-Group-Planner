<script setup lang="ts">
import { getCalendarData } from '../utils/getCalendarData'
import PlannerMonth from '../components/PlannerMonth.vue'
import PlannerDismiss from '@/components/PlannerDismiss.vue';
import { provide, ref } from 'vue';
import { dismissedWeekdays } from '../constants/constants.injectionKeys'

const calendar = getCalendarData()

provide(dismissedWeekdays, ref<string[]>([]))
</script>

<template>
  <main class="home">
    <h1>Group planning App</h1>
    <PlannerDismiss />
    <PlannerMonth v-for="(month, index) in calendar" :key="index" :month="month" />
  </main>
</template>

<style lang="scss" scoped>
.home {
  padding: 8px;
}
</style>
