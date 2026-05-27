export function daysBetween(start: Date, end: Date) {
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInMs = start.getTime() - end.getTime();
  return Math.round(Math.abs(diffInMs / msPerDay) + 1);
}

export function sameDay(day1: Date, day2: Date) {
  return (
    day1.getDate() === day2.getDate() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getFullYear() === day2.getFullYear()
  );
}
