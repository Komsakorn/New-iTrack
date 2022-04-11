import React, {useState} from 'react';
import './Add-activity.css';
import Header from '..//Header/Header';
import Navbar from '..//Navbar/Navbar';


const AddActivity = () => {

const [activityName, setActivityName] = useState('');
const [activityDesc, setActivityDesc] = useState('');
const [activityDate, setActivityDate] = useState('');
const [activityTime, setActivityTime] = useState('');
const [activityTags, setActivityTags] = useState([]);

    const onChangeActivityName = (e) => {
      const newName = e.target.value;
      if(newName.length < 4) {
        return;
      } else {
        setActivityName(e.target.value);
      }
    };

    const onChangeActivityDesc = (e) => {
        setActivityDesc(e.target.value);
    };

    const onChangeActivityDate = (e) => {
      const newDate = e.target.value;
      if(newDate === "dd-mm-yyyy") {
        return;
      } else {
        setActivityDate(e.target.value);
      }
    };

    const onChangeActivityTime = (e) => {
      setActivityTime(e.target.value);
  };
  const onChangeActivityTags = (e) => {
    setActivityTags(e.target.value);
};

  return (<form>
  <Header imgSrc='image/itracklogo.png' title="iTRACK"/>
  <Navbar />
  <section className="boxed">
  <h1 className="add-activity-title">ADD ACTIVITY</h1>
  <div className="form">
    <div className="content-box">
      <div className="container-fluid label-input">
  <label>Activity Name </label>
      <input id="acc-name" className='add-activity-input'
       type="text" placeholder="(Ex.วิ่งราวสวนลุม)" defaultValue={activityName} onChange={onChangeActivityName} required/>
      </div>
      <div className="container-fluid label-input">
          <label>Description </label>
              <input id="description" className='add-activity-input' name="description" type="text" placeholder="(Ex.ลอเล็มยิปซั่ม)" defaultValue={activityDesc} onChange={onChangeActivityDesc}/>
      </div>
      <div className="container-fluid label-select">
        <label id="select-type-label">Types of Activity</label>
        <select name="Types">
        <option value="Running"> Running </option>
        <option value="Walking"> Walking </option>
        <option value="Swimming"> Swimming </option>
        <option value="Biking"> Biking </option>
        <option value="Hiking"> Hiking </option>
        <option value="Other"> Other </option>
        </select>
    </div>
      <div className="container-fluid label-input">
          <label>Date</label>
          <input id="date" className='add-activity-input' name="date" type="datetime-local" placeholder="dd-mm-yyyy" defaultValue={activityDate} onChange={onChangeActivityDate} required/>
      </div>
  <div className="container-fluid label-input">
      <label>Duration</label>
<input id="time" className='add-activity-input' type="number" name="duration" placeholder="Hour(s)" defaultValue={activityTime} onChange={onChangeActivityTime}/>
      </div>
      <div className="container-fluid label-input">
          <label>Tag </label>
              <input id="tag" className='add-activity-input' name="tag" type="text" placeholder="(Ex.ลอเล็มยิปซั่ม)"  defaultValue={activityTags} onChange={onChangeActivityTags}/>
      </div>
      <div className="container-fluid label-input">
     <label for="img">Upload Cover Image:</label>
    <input type="file" className='add-image-input' id="img" name="img" accept="image/*" />
    </div>
     </div>
    </div>
  </section>
    <div className="end-button">
      <button className="next-button" >Save</button>
      </div>
      </form>
  );
}

export default AddActivity;
