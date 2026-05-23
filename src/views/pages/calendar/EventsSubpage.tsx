import { useState } from 'react';
import MonthView from '../../components/calendars/MonthView/MonthView';
import WeekView from '../../components/calendars/WeekView/WeekView';
import type { CalendarView } from '../../core/calendarTypes';
import './EventsSubpage.css';

function EventsSubpage() {
  const [currentView, setCurrentView] = useState<CalendarView>('month');
  const [date, setDate] = useState(new Date());

  const viewComponents = {
    year: MonthView,
    month: MonthView,
    week: WeekView,
    day: MonthView,
  };

  const ActiveView = viewComponents[currentView];

  return (
    <div className="events__subpage">
      <title>Chrona | Events</title>
      <div className="calendar">
        <ActiveView
          date={date}
          setDate={setDate}
          setCurrentView={setCurrentView}
        />
      </div>
    </div>
  );
}

export default EventsSubpage;
