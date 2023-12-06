import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PlannerDay from "../PlannerDay.vue";

describe("PlannerDay", () => {
  it("should render properly", () => {
    const testDay = {
      weekDay: "Tuesday",
      number: 7,
      isWeekend: false,
    };
    const wrapper = mount(PlannerDay, {
      props: {
        day: testDay,
      },
    });
    
    expect(wrapper.text()).toContain(testDay.weekDay);
    expect(wrapper.text()).toContain(testDay.number);
    expect(wrapper.find('.weekDay').exists()).toBe(true)
    expect(wrapper.classes('workDay')).toBe(true)
  });
});
