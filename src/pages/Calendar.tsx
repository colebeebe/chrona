import { useState } from 'react';
import GlobalSidebar from '../components/GlobalSidebar';
import MonthView from '../components/MonthView';
import './Calendar.css'

function Calendar() {
  const [ date, setDate ] = useState(new Date());

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
    <div className="calendar__page">
      <title>Chrona | Calendar</title>
      <GlobalSidebar />

      <div className="temp-buttons">
        <button 
          style={{
            borderRadius: "50%",
            aspectRatio: "1 / 1",
            width: "35px",
            border: "none",
            backgroundColor: "var(--gray)",
            cursor: "pointer",
            margin: "10px 5px",
          }}
          onClick={prevMonth}
        >
          &lt;
        </button>
        <button 
          style={{
            borderRadius: "50%",
            aspectRatio: "1 / 1",
            width: "35px",
            border: "none",
            backgroundColor: "var(--gray)",
            cursor: "pointer",
            margin: "10px 5px"
          }}
          onClick={nextMonth}
        >
          &gt;
        </button>
        <button
          style={{
            margin: "10px 5px"
          }}
          className="btn"
          onClick={() => setDate(new Date())}
        >
          Today
        </button>
      </div>
      <div className="calendar">
        <MonthView date={date} />
      </div>
    </div>
  );
}

export default Calendar;
