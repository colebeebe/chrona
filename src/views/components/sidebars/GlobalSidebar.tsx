import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useUserContext } from '../../contexts/userContext';

import { GoHome } from 'react-icons/go';
import { CiCalendar } from 'react-icons/ci';
import { VscAccount } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';

import './GlobalSidebar.css';

function GlobalSidebar() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUserContext();

  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch('/api/auth/login', options);

    let user = null;
    if (response.ok) {
      user = await response.json();
    }

    if (user) {
      setUser({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      });
    }

    setShowLogin(false);
    setEmail('');
    setPassword('');
  };

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
            className="login-form"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleLogin}
          >
            <h2>Welcome Back!</h2>
            <div className="login-form__section">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
