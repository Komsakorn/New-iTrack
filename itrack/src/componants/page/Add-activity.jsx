import React from 'react';
import './Add-activity.css';
import Header from '..//Header/Header';
import Navbar from '..//Navbar/Navbar';

const AddActivity = () => {
  return (<>
  <Header imgSrc='image/itracklogo.png' title="iTRACK"/>
  <Navbar />
  <section classNameName="boxed">
  <h1 className="add-activity-title">ADD ACTIVITY</h1>
  <div className="form">
    <div className="content-box">
      <div className="container-fluid label-input">
  <label>Activity Name </label>
      <input id="acc-name" className='add-activity-input' name="acc-name" type="text" placeholder="(Ex.วิ่งราวสวนลุม)" required/>
      </div>
      <div className="container-fluid label-input">
          <label>Description </label>
              <input id="description" className='add-activity-input' name="description" type="text" placeholder="(Ex.ลอเล็มยิปซั่ม)"/>
      </div>
      <div className="container-fluid label-select">
        <label id="type-label">Types of Activity</label>
        <select name="Types">
        <option value="Running"> Running </option>
        <option value="Walking"> Walking </option>
        <option value="Swimming"> Swimming </option>
        <option value="Biking"> Biking </option>
        <option value="Hiking"> Hiking </option>
        </select>
    </div>
  <div className="container-fluid label-input">
      <label>Time Start</label>
<input id="time" className='add-activity-input' type="time" name="time"/>
      </div>
      <div className="container-fluid label-input">
      <label>Time End</label>
<input id="time" className='add-activity-input' type="time" name="time"/>
      </div>
      <div className="container-fluid label-input">
          <label>Date</label>
          <input id="date" className='add-activity-input' name="date" type="date" placeholder="dd-mm-yyyy" required/>
      </div>
      <div className="container-fluid label-input">
          <label>Tag </label>
              <input id="tag" className='add-activity-input' name="tag" type="text" placeholder="(Ex.ลอเล็มยิปซั่ม)"/>
      </div>
     </div>
    </div>
  </section>
    <div className="end-button">
      <button className="next-button" >Save</button>
      </div>
      </>
  );
}

export default AddActivity;
