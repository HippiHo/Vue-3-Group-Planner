<script setup lang="ts">
import type { Day } from '../types/calendar.types'
defineProps<{
    day: Day
}>()
</script>

<template>
    <div class="day" :class="{
        weekend: day.isWeekend,
        workDay: !day.isWeekend
    }">
        <span class="weekDay">{{ day.weekDay }}</span>
        <span class="number">{{ day.number }}</span>
    </div>
</template>

<style lang="scss" scoped>
.day {
    border: 1px solid black;
    height: 100px;
    padding: 8px 32px 8px 8px;

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
</style>