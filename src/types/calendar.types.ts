export type Day = {
  weekDay: string;
  number: number;
  isWeekend: boolean;
};

export type Month = {
  title: string;
  days: Day[];
};

export type Calendar = Month[];
