
export function daysBetween(start: Date, end: Date) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffInMs = start.getTime() - end.getTime();
    return Math.round(Math.abs(diffInMs / msPerDay) + 1);
}
