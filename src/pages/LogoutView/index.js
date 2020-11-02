import './logoutView.scss';
import React from "react";

export const LogoutView = ({onClick, error}) => {
  return (
    <>
      <button onClick={onClick}>
        Logout
      </button>

      <span>
        {error}
      </span>
    </>
  )
};
