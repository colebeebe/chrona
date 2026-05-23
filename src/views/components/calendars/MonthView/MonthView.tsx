import { getCalendarData } from '../../../core/calendarData';
import Event from '../Event';
import type { CalendarProps, EventType } from '../../../core/calendarTypes';
import './MonthView.css';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

const events: EventType[] = [
  {
    name: 'Test Event',
    startDate: new Date('2026-05-10 12:00'),
    endDate: new Date('2026-05-12 12:00'),
    calendar: 'yellow',
  },
  {
    name: 'Test Event 2',
    startDate: new Date('2026-05-11 10:00'),
    endDate: new Date('2026-05-11 13:00'),
    calendar: 'orange',
  },
] as const;

function MonthView({ date, setDate, setCurrentView }: CalendarProps) {
  const data = getCalendarData(date);
  const today = new Date();

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
    <div className="month-view__component">
      <div className="calendar-caption">
        <div className="view-select-button__container">
          <button
            className="month-view-select btn"
            onClick={() => setCurrentView('month')}
          >
            Month
          </button>
          <button
            className="week-view-select btn"
            onClick={() => setCurrentView('week')}
          >
            Week
          </button>
        </div>
        <h1>
          {date.toLocaleString('default', { month: 'long' })}{' '}
          {date.getFullYear()}
        </h1>
        <div className="month-select-button__container">
          <button className="btn" onClick={prevMonth}>
            &larr;
          </button>
          <button className="btn" onClick={nextMonth}>
            &rarr;
          </button>
          <button className="btn" onClick={() => setDate(new Date())}>
            Today
          </button>
        </div>
      </div>
      <div className="calendar-headers">
        {weekDays.map((day, i) => (
          <h2 key={i}>{day}</h2>
        ))}
      </div>
      <div className="calendar-body">
        {data.map((day, i) => (
          <div
            className={['calendar-cell', day ? '' : 'outside-month']
              .filter(Boolean)
              .join(' ')}
            key={i}
          >
            <div className="calendar-cell__day-container">
              <span
                className={
                  day === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear()
                    ? 'today-date'
                    : ''
                }
              >
                {day}
                {day === events[0].startDate.getDate() &&
                  date.getMonth() === events[0].startDate.getMonth() &&
                  date.getFullYear() === events[0].startDate.getFullYear() && (
                    <Event event={events[0]} stack={0} />
                  )}
                {day === events[1].startDate.getDate() &&
                  date.getMonth() === events[1].startDate.getMonth() &&
                  date.getFullYear() === events[1].startDate.getFullYear() && (
                    <Event event={events[1]} stack={1} />
                  )}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;
