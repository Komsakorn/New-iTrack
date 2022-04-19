import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <div className="center">
        <div>
          <div className="welcome">
            Welcome Back !!!
            <br />
            Let's do our best today together.
          </div>
          <div className="today-duty">Look like you have activities today.</div>
        </div>
      </div>
    </main>
  );
};

export default Home;
