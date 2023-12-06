import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PlannerHeader from '../PlannerHeader.vue'


describe('PlannerHeader', () => {
  it.skip('renders properly', () => {
    const wrapper = mount(PlannerHeader)
    const heading = wrapper.find('h1')
    expect(heading.text()).toBe('Group Planner')
  })
})
