import { NavLink } from 'react-router-dom';
import './GlobalSidebar.css';

function GlobalSidebar() {
  return (
    <div className="sidebar__global">
      <nav>
        <ul>
          <li> <NavLink to='/home'>Home</NavLink> </li>
          <li> <NavLink to='/calendar'>Calendar</NavLink> </li>
        </ul>
      </nav>
    </div>
  );
}

export default GlobalSidebar;
