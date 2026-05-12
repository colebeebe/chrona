import { NavLink } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { CiCalendar } from 'react-icons/ci';
import './GlobalSidebar.css';

function GlobalSidebar() {
  return (
    <div className="sidebar__global">
      <nav>
        <ul>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <GoHome size={30} strokeWidth={0.3} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/calendar'
              className={({ isActive }) => isActive ? 'active-link' : ''}
            >
              <CiCalendar size={30} strokeWidth={0.75} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default GlobalSidebar;
