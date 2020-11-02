import React, {useState, useEffect, useCallback} from 'react';
import {LoginView} from "./pages/LoginView";
import {LogoutView} from "./pages/LogoutView";
import * as FirestoreService from "./services/firebase";
import './App.scss';

const defaultUser = { loggedIn: false };
const UserContext = React.createContext(defaultUser);
const UserProvider = UserContext.Provider;

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = FirestoreService.onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const requestLogin = useCallback(() => {
    FirestoreService.loginUser()
      .then( (result) => {
        console.log(checkIfUserHasAccess(result.user.email));
      })
      .catch(error =>
        setError(`Error Code ${error.code}: There was an error while trying to log in. Try again later!`)
      );
  });

  const checkIfUserHasAccess = (userEmail) => {
    return userEmail.includes('@springboard.com');
  };

  const requestLogout = useCallback(() => {
    FirestoreService.logoutUser()
      .catch(error =>
        setError(`Error Code ${error.code}: There was an error while trying to log out. Try again later!`)
      );
  }, []);

  return (
    <UserProvider value={user}>
      <h1>
        Secret Santa Organiser
      </h1>
      {
        user.loggedIn
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
    </UserProvider>
  );
}

export default App;
