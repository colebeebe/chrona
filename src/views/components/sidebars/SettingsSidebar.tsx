import { NavLink } from 'react-router-dom';
import './localSidebar.css';

function SettingsSidebar() {
  return (
    <div className="sidebar__local">
      <div className="sidebar__local__foreground">
        <ul>
          <li>
            <NavLink
              end
              to="/settings"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              General
            </NavLink>
          </li>
          <li>
            <NavLink
              to="account"
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Account
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SettingsSidebar;
