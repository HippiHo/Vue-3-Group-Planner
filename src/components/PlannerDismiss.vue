<script setup lang="ts">
import { weekDays } from '@/constants/constants.dateNames';
import { Icon } from "@iconify/vue";
import GlobalContainer from '../components/global/GlobalContainer.vue'
import GlobalButton from '../components/global/GlobalButton.vue'
import { useBreakpoint } from 'vuestic-ui';
import { dismissedWeekdays } from '../constants/constants.injectionKeys'
import { inject } from 'vue';

const breakpoint = useBreakpoint();
const dismissedWeekdaysValue = inject(dismissedWeekdays)

const addDismissedWeekDay = (weekDay: string) => {
    dismissedWeekdaysValue?.value.push(weekDay)
    console.log(dismissedWeekdaysValue?.value)
}
</script>

<template>
    <GlobalContainer as="div" classes="dismissBar">
        <div v-if="breakpoint.xs" class="iconContainer">
            <Icon icon="ph:trash" color="black" width="28" />:
        </div>
        <span v-else class="dismissExplanation">Dismiss whole days of the week:</span>
        <div class="buttonsContainer">
            <GlobalButton v-for="(weekDay, index) in weekDays" :key="index" type="dismissButton" @click="() => addDismissedWeekDay(weekDay)">{{ weekDay }}
            </GlobalButton>
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