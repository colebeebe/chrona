import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { CiCalendar } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';
import './GlobalSidebar.css';

function GlobalSidebar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="sidebar__global">
        <nav>
          <ul className="global__top-links">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                aria-label="home"
              >
                <GoHome size={30} strokeWidth={0.3} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                aria-label="calendar"
              >
                <CiCalendar size={30} strokeWidth={0.75} />
              </NavLink>
            </li>
          </ul>
          <ul className="global__bottom-links">
            <li>
              <button
                className="account-login-button"
                onClick={() => setShowLogin(true)}
              >
                <VscAccount size={30} />
              </button>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
                aria-label="settings"
              >
                <IoSettingsOutline size={30} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {showLogin && (
        <div
          className="login-form__container"
          onClick={() => setShowLogin(false)}
        >
          <form
            action="/login"
            method="POST"
            className="login-form"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Welcome Back!</h2>
            <div className="login-form__section">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="login-form__section">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                minLength={8}
                required
              />
            </div>

            <div className="option-buttons">
              <button type="submit" className="btn btn-accent">
                Log In
              </button>
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogin(false);
                }}
              >
                Cancel
              </button>
            </div>

            <div className="create-account-message">
              Don't have an account?{' '}
              <Link to="/register" onClick={() => setShowLogin(false)}>
                Create one
              </Link>
              .
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default GlobalSidebar;
