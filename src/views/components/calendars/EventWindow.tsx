import { IoClose } from 'react-icons/io5';
import './EventWindow.css';

function EventWindow() {
  const date = new Date();
  // TODO: Switch to date objects for startTime and endTime
  let hours = date.getHours();
  let minutes = (Math.ceil(date.getMinutes() / 15) * 15).toString();

  if (minutes === '60') {
    minutes = '00';
    hours += 1;
  }

  const startTime = `${hours}:${minutes}`;
  const endTime = startTime;
  const formattedDate = date.toISOString().split('T')[0];

  return (
    <div className="event-window__component">
      <div className="modal-content">
        <div className="close-button-container">
          <button className="close-button">
            <IoClose size={20} color={'gray'} />
          </button>
        </div>
        <input name="title" id="title-input" type="text" placeholder="Add title" />
        <section className="start-date-input">
          <label htmlFor="start-date">Start Date: </label>
          <div className="input-container">
            <input name="start-date" id="start-date" type="date" value={formattedDate} />
            <input type="time" value={startTime} />
          </div>
        </section>
        <section className="end-date-input">
          <label htmlFor="end-date">End Date: </label>
          <div className="input-container">
            <input name="end-date" id="end-date" type="date" value={formattedDate} />
            <input type="time" value={endTime} />
          </div>
        </section>
        <section className="notes-input">
          <label htmlFor="notes">Notes</label>
          <textarea 
            id="notes"
            name="notes"
            rows={3}
          />
        </section>
        <section className="calendar-select">
          <select name="calendars" id="calendar-drop-down">
            <option value="calendar1">Calendar 1</option>
            <option value="calendar2">Calendar 2</option>
            <option value="calendar3">Calendar 3</option>
            <option value="calendar4">Calendar 4</option>
            <option value="calendar5">Calendar 5</option>
          </select>
        </section>
        <div className="option-button-container">
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </div>
  );
}

export default EventWindow;
