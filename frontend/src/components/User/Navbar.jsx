import React from "react";

import noti from "../../assets/notification.png";
import exit from "../../assets/exit.png";

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="logo">Hi,Super</a>

      <div className="profile">
        <img src={noti} alt="not" />
        <img src={exit} alt="exit" />
      </div>
    </div>
  );
}

export default Navbar;
