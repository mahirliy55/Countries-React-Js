import React from "react";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const Nav = ({ mode, darkModeStatus }) => {
  return (
    <section className={`nav ${darkModeStatus ? "dark__mode" : ""}`}>
      <nav>
        <div className="container">
          <div className="title">
            <div className="logo">
              <h2 className={`${darkModeStatus ? "white" : ""}`}>Where it the world ?</h2>
            </div>
            <div className="mode" onClick={mode}>
              <NightsStayIcon className={`${darkModeStatus ? "white" : ""}`} />
              <span className={`${darkModeStatus ? "white" : ""}`}> Dark Mode</span>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
