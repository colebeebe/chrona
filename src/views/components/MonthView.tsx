import { useState, useEffect, useRef } from 'react';
import { getCalendarData } from '../core/calendarData';
import './MonthView.css';

type CalendarProps = {
  date: Date;
};

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;

function MonthView({ date }: CalendarProps) {
  const ROWS = 6;
  const COLUMNS = 7;
  const data = getCalendarData(date);
  const today = new Date();
  const calendarBody = useRef<HTMLTableSectionElement | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!calendarBody.current) return;

    const updateRect = () => {
      if (calendarBody.current) {
        setRect(calendarBody.current.getBoundingClientRect());
      }
    };

    updateRect();

    const rectObserver = new ResizeObserver(updateRect);
    rectObserver.observe(calendarBody.current);

    return () => rectObserver.disconnect();
  }, []);

  return (
    <>
      <table className="calendar__component">
        <caption>
          {date.toLocaleString('default', { month: 'long' })}{' '}
          {date.getFullYear()}
        </caption>
        <thead className="calendar-body">
          <tr>
            {weekDays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody ref={calendarBody}>
          {data.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td key={j} className={day ? '' : 'outside-month'}>
                  <div className="day-cell">
                    <div
                      className={[
                        day === today.getDate() &&
                        date.getMonth() === today.getMonth() &&
                        date.getFullYear() === today.getFullYear()
                          ? 'today-date'
                          : '',
                        'day-number',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      {day ?? ''}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {rect && (
        <div
          className="calendar-event-chip"
          style={{
            position: 'absolute',
            top: rect.top + rect.height / ROWS + 30 + 'px',
            left: rect.left + (rect.width / COLUMNS) * 2 + 10 + 'px',
            width: (rect.width / COLUMNS) * 3 - 20 + 'px',
            height: '25px',
            backgroundColor: 'var(--pink)',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              paddingLeft: '10px',
              fontSize: '0.9rem',
              color: 'black',
            }}
          >
            Our first event!
            <span style={{ color: '#666', paddingLeft: '10px' }}>10:00am</span>
          </p>
        </div>
      )}
    </>
  );
}

export default MonthView;
