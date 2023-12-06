import { monthNames } from "../constants/constants.dateNames";

type Day = {
  day: string;
  number: number;
  weekend: boolean;
};

type Month = {
  title: string;
  days: Day[];
};

type Calendar = Month[];

const getDayName = (dateStr: string, locale: string) => {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
};

const fillCalendarData = (year: number, month: number) => {
  const daysOfCurrentMonth = new Date(year, month + 1, 0).getDate();

  let filledArray = new Array(daysOfCurrentMonth);

  for (let i = 0; i < daysOfCurrentMonth; i++) {
    const dayName = getDayName(`${month + 1}/${i + 1}/${year}`, "en-US");
    filledArray[i] = {
      day: dayName,
      number: i + 1,
      weekend: dayName === "Saturday" || dayName === "Sunday",
    };
  }

  return filledArray;
};

export const getCalendarData = (): Calendar => {
  const today = new Date().getDate();

  const currentMonth = new Date().getMonth();

  const currentYear = new Date().getFullYear();

  const currentDaysArray = fillCalendarData(currentYear, currentMonth);

  const calendar: Calendar = [
    {
      title: `${monthNames[currentMonth]} ${currentYear}`,
      days: currentDaysArray.splice(today - 1, currentDaysArray.length),
    },
  ];

  for (let i = 0; i <= 10; i++) {
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth !== 11 ? currentYear : currentYear + 1;
    calendar.push({
      title: `${monthNames[nextMonth + i]} ${nextYear}`,
      days: fillCalendarData(nextYear, nextMonth + i),
    });
  }

  return calendar;
};