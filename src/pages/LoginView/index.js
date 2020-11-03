import './loginView.scss';

export const LoginView = ({onClick, error}) => {
  return (
    <div className="login-page-container center-flex-display">
      <p>
        Login with your Springboard email id
      </p>

      <button onClick={onClick}>
        Login
      </button>

      <span>
          {error}
      </span>
    </div>
  )
};
