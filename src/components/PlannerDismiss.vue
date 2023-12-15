<script setup lang="ts">
import { weekDays } from '@/constants/constants.dateNames';
import { Icon } from "@iconify/vue";
import GlobalContainer from '../components/global/GlobalContainer.vue'
import GlobalToggleButton from './global/GlobalToggleButton.vue'
import { useBreakpoint } from 'vuestic-ui';
import { useExcludeStore } from '@/stores/exclude'
import type { Weekday } from '../types/calendar.types'

const breakpoint = useBreakpoint();
const store = useExcludeStore()

const toggleExcludeButton = (weekDay: Weekday) => {
    if (store.excludedWeekdays.includes(weekDay)) {
        store.removeExcludedDays(weekDay)
    } else {
        store.addExcludedDays(weekDay)
    }
}

</script>

<template>
    <GlobalContainer as="div" classes="dismissBar">
        <div v-if="breakpoint.xs" class="iconContainer">
            <Icon icon="ph:trash" color="black" width="28" />:
        </div>
        <span v-else class="dismissExplanation">Dismiss whole days of the week:</span>
        <div class="buttonsContainer">
            <GlobalToggleButton v-for="(weekDay, index) in weekDays" :key="index" :week-day="weekDay"
                :is-add-button="store.excludedWeekdays.includes(weekDay)" @click="toggleExcludeButton(weekDay)">{{ weekDay
                }}
            </GlobalToggleButton>
        </div>
    </GlobalContainer>
</template>

<style lang="scss" scoped>
.dismissBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    flex-wrap: wrap;

    .iconContainer {
        display: flex;
        font-weight: bold;
    }

    .dismissExplanation {
        font-weight: bold;
        font-size: 1rem;
    }

    .buttonsContainer {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }
}

/* Medium devices such as tablets (768px and up) */
@media only screen and (min-width: 48em) {
    .dismissBar {
        flex-direction: row;
    }
}
</style>