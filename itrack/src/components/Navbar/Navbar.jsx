import React from "react";
import "./Navbar.css";
import LogoutHooks from "../button/Logout";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="NavMenu">
        <a className="NavLink" href="#">
          HOME
        </a>
        <a className="NavLink" href="http://localhost:3000/add-activity">
          ADD ACTIVITY
        </a>
        <a className="NavLink" href="http://localhost:3000/activity-list">
          ACTIVITIES LIST
        </a>
        <a className="NavLink" href="#">
          BLOG
        </a>
        <a className="NavLink" href="#">
          LIVE EVENTS
        </a>
        <a className="NavLink" href="http://localhost:3000/">
          <LogoutHooks />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
