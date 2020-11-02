import './login.scss';
import * as FirestoreService from '../../services/firebase';

export const Login = () => {
  return (
    <div className="login-page-container">
      <h1>
        Secret Santa Organiser
      </h1>

      <p>
        Login with your Springboard email id
      </p>

      <button onClick={FirestoreService.authenticateUser}>
        Login
      </button>
    </div>
  )
};
