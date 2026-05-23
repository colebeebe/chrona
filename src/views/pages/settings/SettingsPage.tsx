import { Outlet } from 'react-router-dom';
import SettingsSidebar from '../../components/sidebars/SettingsSidebar';
import './SettingsPage.css';

function SettingsPage() {
  return (
    <div className="settings__page">
      <SettingsSidebar />
      <Outlet />
    </div>
  );
}

export default SettingsPage;
