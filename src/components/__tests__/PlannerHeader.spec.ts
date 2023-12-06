import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import PlannerHeader from "../PlannerHeader.vue";

describe("PlannerHeader", () => {
  it("shows the heading", () => {
    const wrapper = shallowMount(PlannerHeader);
    const heading = wrapper.find("h1");
    expect(heading.text()).toBe("Group Planner");
  });

  it("routes to about page", () => {
    const wrapper = shallowMount(PlannerHeader);
    expect(wrapper.find('.aboutRoute').attributes().to).toBe('/about');
  });
});
