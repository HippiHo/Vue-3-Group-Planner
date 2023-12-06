<script setup lang="ts">
import { getCalendarData } from '../utils/getCalendarData'
import { weekDays } from '@/constants/constants.dateNames';
import { Icon } from "@iconify/vue";
import GlobalContainer from '../components/global/GlobalContainer.vue'
import PlannerMonth from '../components/PlannerMonth.vue'

const calendar = getCalendarData()
</script>

<template>
  <main class="home">
    <h1>Group planning App</h1>
    <p class="mb-5">Dismiss the days that are not free:</p>
    <GlobalContainer as="div" classes="trallala">
      <Icon class="icon" icon="ph:trash" color="black" width="22" />
      <button v-for="(weekDay, index) in weekDays" :key="index">{{ weekDay }}</button>
    </GlobalContainer>
    <PlannerMonth v-for="(month, index) in calendar" :key="index" :month="month"/>
  </main>
</template>

<style lang="scss" scoped>
.home {
  padding: 8px;
}
</style>
