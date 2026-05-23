import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div className="error__page">
      <title>Page Not Found</title>
      <img src="/images/404.gif" alt="404 gif" />
      <div className="center-link">
        <Link to="/home" className="btn btn-accent">
          Return to homepage
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
