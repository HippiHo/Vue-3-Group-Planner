import { getCalendarData } from "./getCalendarData";
import { describe, it, expect } from "vitest";

describe("CalendarData", () => {
  it("contains 12 months", () => {
    const calendar = getCalendarData();
    expect(calendar.length).toEqual(12);
  });

  it("starts with the 5th of December, which is a Tuesday", () => {
    const calendar = getCalendarData(new Date("Dec 05 2023"));
    expect(calendar[0].days[0].weekDay).toBe("Tuesday");
  });

  it("doesn't return the same calendar if one is default and another has a different start date", () => {
      const defaultCalendar = getCalendarData();
      const specificCalendar = getCalendarData(new Date("Dec 05 2022"));
      expect(defaultCalendar).not.toEqual(specificCalendar);
    })
});
