import React, {useContext}  from 'react';
import {UserContext} from "../../App";
import './profileView.scss';

export const ProfileView = () => {
  const user = useContext(UserContext);

  return (
    <div className="profile-view-container center-flex-display">
      <section className="profile-info-container center-flex-display">
        <div className="profile-img-container">
          <img
            src={user.photoURL}
            alt="profile avatar"
            className="profile-img"
          />
        </div>

        <p className="profile-name">
          {user.displayName}
        </p>

        <p className="profile-email-address">
          {user.email}
        </p>
      </section>

      <section className="what-gift-you-want-container center-flex-display">
        <p className="i-want-label">
          I want ........
        </p>

        <textarea/>

        <button>
          Edit
        </button>
      </section>

      <section className="secret-santa-container center-flex-display">
        <p>
          You are Secret Santa to -
        </p>

        <div className="secret-santa-img-container">
          <img
            src=""
            alt="secret santa avatar"
            className="secret-santa-img"
          />
        </div>

        <p className="secret-santa-name">
          Dummy Name
        </p>

        <button>
          Edit
        </button>

        <p>
          You have not selected anyone yet!
        </p>

        <button>
          Select
        </button>
      </section>
    </div>
  );
};
