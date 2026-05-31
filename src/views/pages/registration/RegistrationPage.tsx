import './RegistrationPage.css';

function RegistrationPage() {
  return (
    <div className="registration__page">
      <h1>Register</h1>
      <form method="POST" action="/register" className="register-form">
        <div className="register-form__section info-section">
          <div className="first-name-section">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="last-name-section">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="birthday-section">
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id="birthday" name="birthday" required />
          </div>
        </div>

        <div className="register-form__section">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter a unique username"
            required
          />
        </div>

        <div className="register-form__section">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="register-form__section">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            pattern="(?=.*[0-9])(?=.*[!@#$%^&*\(\)]).*"
            required
          />
          <div className="register-form__password-message">
            Must be 8 characters long and have a number and special character
          </div>
        </div>

        <div className="register-form__section">
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirm your password"
            pattern="(?=.*[0-9])(?=.*[!@#$%^&*\(\)]).*"
            required
          />
        </div>

        <button type="submit" className="btn btn-accent">
          Register Account
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
