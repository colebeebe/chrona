import type { CalendarProps } from '../../utils/calendarTypes';
import './CalendarHeaderCaption.css';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

function CalendarHeaderCaption({
  date,
  setDate,
  setCurrentView,
  navigate,
}: CalendarProps) {
  return (
    <div className="calendar-header-caption__component">
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
        <div className="mont-select-button__container">
          <button className="btn" onClick={navigate.prev}>
            &larr;
          </button>
          <button className="btn" onClick={navigate.next}>
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
    </div>
  );
}

export default CalendarHeaderCaption;
