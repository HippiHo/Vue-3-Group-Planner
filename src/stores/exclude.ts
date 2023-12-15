import { defineStore } from "pinia";
import type { Weekday } from "../types/calendar.types";
import { ref } from "vue";

export const useExcludeStore = defineStore("exclude", () => {
  const excludedWeekdays = ref<Weekday[]>([]);
  const addExcludedDays = (excludedWeekday: Weekday) => {
    excludedWeekdays.value.push(excludedWeekday);
  };

  const removeExcludedDays = (excludedWeekday: Weekday) => {
    excludedWeekdays.value = excludedWeekdays.value.filter(
      (weekday) => weekday !== excludedWeekday
    );
  };

  return {
    excludedWeekdays,
    addExcludedDays,
    removeExcludedDays,
  };
});
