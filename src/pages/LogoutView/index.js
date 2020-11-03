import './logoutView.scss';
import React from "react";

export const LogoutView = ({onClick, error}) => {
  return (
    <div className="logout-view-container center-flex-display">
      <button onClick={onClick}>
        Logout
      </button>

      <span>
        {error}
      </span>
    </div>
  )
};
