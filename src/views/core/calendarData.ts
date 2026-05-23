export function getCalendarData(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = new Date(year, month, 1).getDay();
  // const daysAfterMonth = 7 - ((offset + daysInMonth) % 7);
  const daysAfterMonth = 42 - offset - daysInMonth;

  // Fill the calendar with days
  let data: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Add blank days at end of month if it's not a full week
  // if (daysAfterMonth < 7) {
  data = [...data, ...Array(daysAfterMonth).fill(null)];
  // }

  return data;
}
