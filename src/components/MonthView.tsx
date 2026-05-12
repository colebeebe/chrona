import { getCalendarData } from '../core/calendarData';
import './MonthView.css';

type CalendarProps = {
  date: Date;
};

const weekDays = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
] as const;

function MonthView({ date }: CalendarProps) {
  const data = getCalendarData(date);
  const today = new Date();

  return (
    <table className="calendar__component">
      <caption>
        {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
      </caption>
      <thead>
        <tr>
          {weekDays.map(day => <th key={day}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((week, i) => (
          <tr key={i}>{week.map((day, j) => (
              <td key={j} className={day ? '' : 'outside-month'}>
                <div className="day-cell">
                  <div className={
                    [
                      (
                        day === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear()
                      ) ? 'today-date' : '',
                      'day-number'
                    ].filter(Boolean).join(' ')
                  }>
                    {day ?? ''}
                  </div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MonthView;
