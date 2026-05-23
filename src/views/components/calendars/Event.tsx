import { daysBetween } from '../../core/calendarCalculations';
import type { EventType } from '../../core/calendarTypes';
import './Event.css';

type EventProps = {
  event: EventType;
  stack: number;
}

function Event({ event, stack }: EventProps) {
  const numDays = daysBetween(event.startDate, event.endDate);

  return (
    <div
      className="event__component"
      style={{
        width:
          `calc((var(--calendar__subpage__width) - 32px) / 7 * ${numDays} - 15px)`,
        backgroundColor: `var(--${event.calendar})`,
        marginTop: `${stack * 24}px`
      }}
    >
      <span>{event.name}</span>
    </div>
  );
}

export default Event;
