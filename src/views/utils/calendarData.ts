import { sameDay } from './calendarCalculations';
import type { EventType } from '../utils/calendarTypes';

type DateObjectType = {
  date: Date;
  events?: EventType[];
};

// TODO: When we create a backend, replace this with a db query
const events: EventType[] = [
  {
    name: 'Test Event',
    startDate: new Date('2026-05-10 12:00'),
    endDate: new Date('2026-05-12 12:00'),
    calendar: 'yellow',
    stack: 0,
  },
  {
    name: 'Test Event 2',
    startDate: new Date('2026-05-11 10:00'),
    endDate: new Date('2026-05-11 13:00'),
    calendar: 'orange',
    stack: 1,
  },
  {
    name: 'Vacation',
    startDate: new Date('2026-06-08 12:00'),
    endDate: new Date('2026-06-13 12:00'),
    calendar: 'blue',
    stack: 0,
  },
  {
    name: 'Cole CSE 341 Meeting',
    startDate: new Date('2026-05-28 10:00'),
    endDate: new Date('2026-05-28 11:00'),
    calendar: 'gray',
    stack: 0,
  },
] as const;

export function getMonthData(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const start = new Date(year, month, 1);
  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);

  const days: DateObjectType[] = [];

  // TODO: Create stacking logic here
  // I think the best way to do this is to look backwards at the events that
  // have happened? It will need to have reference so each day doesn't have to
  // look at every day before it.
  // TODO: Create wrapping logic here
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const dayEvents = events.filter((e) => sameDay(e.startDate, d));
    days.push({ date: d, events: dayEvents });
  }

  return days;
}

export function getWeekData(date: Date) {
  const start = new Date(date);
  const dayOfWeek = start.getDay();
  start.setDate(start.getDate() - dayOfWeek);

  const days: DateObjectType[] = [];

  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const dayEvents = events.filter((e) => sameDay(e.startDate, d));
    days.push({ date: d, events: dayEvents });
  }

  return days;
}
