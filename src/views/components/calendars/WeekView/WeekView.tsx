import CalendarHeaderCaption from '../CalendarHeaderCaption';
import { getWeekData } from '../../../core/calendarData';
import type { CalendarProps } from '../../../core/calendarTypes';
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
      <CalendarHeaderCaption
        date={date}
        setDate={setDate}
        setCurrentView={setCurrentView}
        navigate={{ prev, next }}
      />
      <div className="calendar-body">
        {days.map((day) => (
          <div>
            {day.date.getDate()}
            {day.events && day.events.map((e) => <p>{e.name}</p>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekView;
