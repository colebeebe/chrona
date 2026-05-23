import { Outlet } from 'react-router-dom';
import CalendarSidebar from '../../components/sidebars/CalendarSidebar';
import './CalendarPage.css';

function CalendarPage() {
  return (
    <div className="calendar__page">
      <CalendarSidebar />
      <Outlet />
    </div>
  );
}

export default CalendarPage;
