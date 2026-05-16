import { NavLink } from 'react-router-dom';
import './localSidebar.css';

function CalendarSidebar() {
  return (
    <div className="sidebar__local">
      <div className="sidebar__local__foreground">
        <ul>
          <li>
            <NavLink
              end
              to="/calendar"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="todo"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              To-Do
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CalendarSidebar;
