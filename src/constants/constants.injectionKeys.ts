import type { InjectionKey, Ref } from 'vue'

export const dismissedWeekdays = Symbol() as InjectionKey<Ref<string[]>>