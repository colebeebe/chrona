import CalendarHeaderCaption from '../CalendarHeaderCaption';
import { getWeekData } from '../../../utils/calendarData';
import type { CalendarProps } from '../../../utils/calendarTypes';
import './WeekView.css';

function WeekView({ date, setDate, setCurrentView }: CalendarProps) {
  const days = getWeekData(date);

  const prev = () => {
    const d = new Date(date);
    d.setDate(date.getDate() - 7);
    setDate(d);
  };

  const next = () => {
    const d = new Date(date);
    d.setDate(date.getDate() + 7);
    setDate(d);
  };

  return (
    <div className="week-view__component">
      <div className="week-view__header">
        <CalendarHeaderCaption
          date={date}
          setDate={setDate}
          setCurrentView={setCurrentView}
          navigate={{ prev, next }}
        />
        <div className="number-header">
          {Array.from({ length: 7 }).map((_, i) => (
            <div className="day-number" key={i}>
              {days[i].date.getDate()}
            </div>
          ))}
        </div>
      </div>
      <div className="calendar-body">
        {days.map((_, i) => (
          <div className="day-container" key={i}>
            {Array.from({ length: 24 }).map((_, j) => (
              <div className="hour-container" key={j}></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekView;
