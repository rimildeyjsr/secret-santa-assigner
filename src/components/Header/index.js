import React, {useContext} from 'react';
import {LogoutView} from "../../pages/LogoutView";
import {LoginView} from "../../pages/LoginView";
import {UserContext} from "../../App";
import './header.scss';

export const Header = ({requestLogout, requestLogin, error}) => {
  const user = useContext(UserContext);

  return (
    <div className="header-container">
      <h1 className="heading">
        Secret Santa Assigner
      </h1>

      <div className="login-logout-button-container">
        {
          user.loggedIn && user.email
            ?
            <LogoutView
              onClick={requestLogout}
              error={error}
            />
            :
            <LoginView
              onClick={requestLogin}
              error={error}
            />
        }
      </div>
    </div>
  )
};
