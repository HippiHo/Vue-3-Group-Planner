<script setup lang="ts">
import GlobalContainer from '../components/global/GlobalContainer.vue'
import PlannerDay from './PlannerDay.vue'
import type { Month } from '../types/calendar.types'
import { useExcludeStore } from '@/stores/exclude'

defineProps<{
    month: Month
}>()

const store = useExcludeStore()

</script>

<template>
    <GlobalContainer as="section">
        <h2 class="text-left">{{ month.title }}</h2>
        <div class="month">
            <PlannerDay v-for="(day, index) in month.days" :key="index" :day="day" :weekdayIsExcluded="store.excludedWeekdays?.some(item => item === day.weekDay)"/>
        </div>
    </GlobalContainer>
</template>

<style lang="scss" scoped>
.month {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
    .month {
        grid-template-columns: repeat(5, 1fr);
    }
}
</style>