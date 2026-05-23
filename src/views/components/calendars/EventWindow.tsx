import { IoClose } from 'react-icons/io5';
import './EventWindow.css';

function EventWindow() {
  const date = new Date();

  const minutes = date.getMinutes();
  const remainder = minutes % 15;
  const addedMinutes = remainder === 0 ? 15 : 15 - remainder;

  const startTime = new Date();
  startTime.setMinutes(minutes + addedMinutes);
  const endTime = new Date(startTime);
  endTime.setMinutes(endTime.getMinutes() + 15);

  const formattedDate = date.toISOString().split('T')[0];

  return (
    <div className="event-window__component">
      <div className="modal-content">
        <div className="close-button-container">
          <button className="close-button">
            <IoClose size={20} color={'gray'} />
          </button>
        </div>
        <input
          name="title"
          id="title-input"
          type="text"
          placeholder="Add title"
        />
        <section className="start-date-inputs">
          <label htmlFor="start-date">Start Date: </label>
          <div className="input-container">
            <input
              name="start-date"
              id="start-date"
              type="date"
              value={formattedDate}
            />
            <input
              type="time"
              value={`${startTime.getHours()}:${startTime.getMinutes()}`}
            />
          </div>
        </section>
        <section className="end-date-inputs">
          <label htmlFor="end-date">End Date: </label>
          <div className="input-container">
            <input
              name="end-date"
              id="end-date"
              type="date"
              value={formattedDate}
            />
            <input
              type="time"
              value={`${endTime.getHours()}:${endTime.getMinutes()}`}
            />
          </div>
        </section>
        <section className="notes-input">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" rows={3} />
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
