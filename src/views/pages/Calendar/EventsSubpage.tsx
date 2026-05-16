import { useState } from 'react';
import MonthView from '../../components/MonthView';
import './EventsSubpage.css';

function EventsSubpage() {
  const [date, setDate] = useState(new Date());

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
    <div className="events__subpage">
      <title>Chrona | Events</title>
      <h1>Events</h1>
      <div className="calendar">
        <div className="temp-buttons">
          <button className="btn" onClick={prevMonth}>
            &lt;
          </button>
          <button className="btn" onClick={nextMonth}>
            &gt;
          </button>
          <button
            style={{
              margin: '10px 5px',
            }}
            className="btn"
            onClick={() => setDate(new Date())}
          >
            Today
          </button>
        </div>
        <MonthView date={date} />
      </div>
    </div>
  );
}

export default EventsSubpage;
