import React from "react";
import "./Activity-list.css";
import Table from "../dashboard/Dashboard";
import Navbar from "../Navbar/Navbar";

const ActivityList = () => {
  return (
    <>
      <Navbar />
      <section className="boxed-page">
        <Table />
      </section>
      <div className="add-button">
        <a href="http://localhost:3000/add-activity" className="close">
          <img
            className="close-icon"
            src={"/image/index-pic/icons8-plus-48.png"}
          />
        </a>
      </div>
    </>
  );
};

export default ActivityList;