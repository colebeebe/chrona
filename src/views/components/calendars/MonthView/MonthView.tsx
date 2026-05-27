import CalendarHeaderCaption from '../CalendarHeaderCaption';
import Event from '../../events/Event';
import { getMonthData } from '../../../utils/calendarData';
import { sameDay } from '../../../utils/calendarCalculations';
import type { CalendarProps } from '../../../utils/calendarTypes';
import './MonthView.css';

function MonthView({ date, setDate, setCurrentView }: CalendarProps) {
  const days = getMonthData(date);
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
      <CalendarHeaderCaption
        date={date}
        setDate={setDate}
        setCurrentView={setCurrentView}
        navigate={{ next: nextMonth, prev: prevMonth }}
      />
      <div className="calendar-body">
        {days.map((day, i) => (
          <div
            className={[
              'calendar-cell',
              day.date.getMonth() === date.getMonth() ? '' : 'outside-month',
            ]
              .filter(Boolean)
              .join(' ')}
            key={i}
          >
            <div className="calendar-cell__day-container">
              <span className={sameDay(day.date, today) ? 'today-date' : ''}>
                {day.date.getDate()}
                {day.events &&
                  day.events.map((e) => <Event event={e} stack={e.stack} />)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthView;
