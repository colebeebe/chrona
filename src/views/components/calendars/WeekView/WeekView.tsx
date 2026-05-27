import CalendarHeaderCaption from '../CalendarHeaderCaption';
import type { CalendarProps } from '../../../core/calendarTypes';
import './WeekView.css';

function WeekView({ date, setDate, setCurrentView }: CalendarProps) {
  return (
    <div className="week-view__component">
      <CalendarHeaderCaption
        date={date}
        setDate={setDate}
        setCurrentView={setCurrentView}
        navigate={{ prev: () => {}, next: () => {} }}
      />
      <div className="calendar-body">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
}

export default WeekView;
