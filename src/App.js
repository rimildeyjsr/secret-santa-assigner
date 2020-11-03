import React, {useState, useEffect, useCallback} from 'react';
import * as FirestoreService from "./services/firebase";
import {ProfileView} from "./pages/ProfileView";
import {Header} from "./components/Header";
import './App.scss';

const defaultUser = { loggedIn: false };
export const UserContext = React.createContext(defaultUser);
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
        if(checkIfUserHasAccess(result.user.email)) {
          setUser({loggedIn: true, ...result.user});
          console.log({loggedIn: true, ...result.user});
        } else {
          setError('Use a Springboard account to log in');
        }
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
      <div className="app-container center-flex-display">
        <Header
          requestLogin={requestLogin}
          requestLogout={requestLogout}
          error={error}
        />

        {
          user.loggedIn && user.email
            ?
            <ProfileView/>
            :
            null
        }
      </div>
    </UserProvider>
  );
}

export default App;
