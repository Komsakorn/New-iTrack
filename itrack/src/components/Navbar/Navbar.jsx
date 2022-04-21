import React from "react";
import "./Navbar.css";
import LogoutHooks from "../button/Logout";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="NavMenu">
        <a
          className="NavLink"
          id="Navlink-home"
          href="http://localhost:3000/Home"
        >
          HOME
        </a>
        <a
          className="NavLink"
          id="Navlink-add"
          href="http://localhost:3000/add-activity"
        >
          ADD ACTIVITY
        </a>
        <a
          className="NavLink"
          id="Navlink-list"
          href="http://localhost:3000/activity-list"
        >
          ACTIVITIES LIST
        </a>
        <a className="NavLink" id="Navlink-blog" href="#">
          BLOG
        </a>
        <a className="NavLink" id="Navlink-event" href="#">
          LIVE EVENTS
        </a>
        <a
          className="NavLink"
          id="Navlink-signout"
          href="http://localhost:3000/"
        >
          <LogoutHooks />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
