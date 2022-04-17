import React from "react";
import "./App.css";
import Login from "./components/page/Login";
import AddActivity from "./components/page/Add-activity";
import ActivityList from "./components/page/Activity-list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="add-activity" element={<AddActivity />} />
          <Route path="activity-list" element={<ActivityList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
