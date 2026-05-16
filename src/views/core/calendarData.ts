export function getCalendarData(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = new Date(year, month, 1).getDay();
  const daysAfterMonth = 7 - ((offset + daysInMonth) % 7);

  // Fill the calendar with days
  let calendarCells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Add blank days at end of month if it's not a full week
  if (daysAfterMonth < 7) {
    calendarCells = [...calendarCells, ...Array(daysAfterMonth).fill(null)];
  }

  // Format into weeks
  const data: (number | null)[][] = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    data.push(calendarCells.slice(i, i + 7));
  }

  return data;
}
