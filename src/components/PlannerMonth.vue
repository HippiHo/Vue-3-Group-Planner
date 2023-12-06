<script setup lang="ts">
import GlobalContainer from '../components/global/GlobalContainer.vue'
import PlannerDay from './PlannerDay.vue'
import type { Month } from '../types/calendar.types'

defineProps<{
    month: Month
}>()

</script>

<template>
    <GlobalContainer as="section">
        <h2 class="text-left">{{ month.title }}</h2>
        <div class="month">
            <PlannerDay v-for="(day, index) in month.days" :key="index" :day="day" />
        </div>
    </GlobalContainer>
</template>

<style lang="scss" scoped>
.month {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>