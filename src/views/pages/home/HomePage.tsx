import { useUserContext } from '../../contexts/userContext';

import './HomePage.css';

function Home() {
  const { user } = useUserContext();

  return (
    <div className="home__page">
      <title>Chrona | Home</title>
      <h1>{user.id === 0 ? 'Welcome to Chrona.' : `Welcome back, ${user.firstName}` }</h1>
      {user.id === 0 ? null : <button onClick={async () => await fetch('/api/auth/logout')} className="btn btn-accent">Logout</button>}
    </div>
  );
}

export default Home;
