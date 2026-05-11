import { useState } from 'react';
import './Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = new Date(year, month, 1).getDay();
  const daysAfterMonth = 7 - ((offset + daysInMonth) % 7);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Fill the calendar with days
  let calendarCells: (number | null)[] = [
    ...Array(offset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  // Add blank days at end of month if it's not a full week
  if (daysAfterMonth < 7) {
    calendarCells = [
      ...calendarCells,
      ...Array(daysAfterMonth).fill(null)
    ];
  }

  // Format into weeks
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  const nextMonth = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month === 11) {
      setDate(new Date(year + 1, 0, 1));
      return;
    }
    setDate(new Date(year, month + 1, 1));
  };

  const prevMonth = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (month === 0) {
      setDate(new Date(year - 1, 11, 1));
      return;
    }
    setDate(new Date(year, month - 1, 1));
  };


  return (
    <table className="calendar__component">
      <caption>
        <div className="month-header">
          <button className="btn" onClick={prevMonth}>&lt;</button>
          <span>{date.toLocaleString("default", { month: "long" })} {year}</span>
          <button className="btn" onClick={nextMonth}>&gt;</button>
        </div>
      </caption>
      <thead>
        <tr>
          {weekDays.map(day => <th key={day}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, i) => (
          <tr key={i}>{week.map((day, j) => (
              <td key={j} className={day ? "" : "outside-month"}>
                <div className="day-cell">{day ?? ''}</div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
