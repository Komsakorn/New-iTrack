import React from 'react';
import './Activity-list.css';
import Header from '..//Header/Header';
import Navbar from '..//Navbar/Navbar';

const ActivityList = () => {
  return (<>  
  <Header imgSrc='image/itracklogo.png' title="iTRACK"/>
  <Navbar />
  <section className="boxed-page">
  <div className="lower-box">
    <div className="center-box">
    <div className="row">
    <div className="low-content-box-1">
      <div className="low-content">
        <div className="lower-box-upper-text">
        <img id="run" src="image/index-pic/run.png"/>
        <label className="distance">12.56 KM</label>
        </div>
        <div className="lower-box-lower-text">
          <div className="lower-box-lower-text-1">
          <img id="place" src="image/index-pic/place.png"/>
        <label className="date-place">17/12/2022 Bangkaen</label>
          </div>
          <div className="lower-box-lower-text-2">
            <img id="calories" src="image/index-pic/calories.png"/>
          <label className="KCal">90 KCal</label>
            </div>
          </div>
      </div>
    </div>
    <div className="low-content-box-2">
      <div className="low-content">
        <div className="lower-box-upper-text">
        <img id="run" src="image/index-pic/run.png"/>
        <label className="distance">19.56 KM</label>
        </div>
        <div className="lower-box-lower-text">
          <div className="lower-box-lower-text-1">
          <img id="place" src="image/index-pic/place.png"/>
        <label className="date-place">16/12/2022 Bangkaen</label>
          </div>
          <div className="lower-box-lower-text-2">
            <img id="calories" src="image/index-pic/calories.png"/>
          <label className="KCal">210 KCal</label>
            </div>
          </div>
      </div>
    </div>
    <div className="low-content-box-3">
      <div className="low-content">
        <div className="lower-box-upper-text">
        <img id="run" src="image/index-pic/run.png"/>
        <label className="distance">7.56 KM</label>
        </div>
        <div className="lower-box-lower-text">
          <div className="lower-box-lower-text-1">
          <img id="place" src="image/index-pic/place.png"/>
        <label className="date-place">15/12/2022 Bangkaen</label>
          </div>
          <div className="lower-box-lower-text-2">
            <img id="calories" src="image/index-pic/calories.png"/>
          <label className="KCal">80 KCal</label>
            </div>
          </div>
      </div>
    </div>
    <div className="low-content-box-4">
      <div className="low-content">
        <div className="lower-box-upper-text">
        <img id="run" src="image/index-pic/run.png"/>
        <label className="distance">15.56 KM</label>
        </div>
        <div className="lower-box-lower-text">
          <div className="lower-box-lower-text-1">
          <img id="place" src="image/index-pic/place.png"/>
        <label className="date-place">14/12/2022 Bangkaen</label>
          </div>
          <div className="lower-box-lower-text-2">
            <img id="calories" src="image/index-pic/calories.png"/>
          <label className="KCal">130 KCal</label>
            </div>
          </div>
      </div>
    </div>
    <div className="low-content-box-5">
      <div className="low-content">
        <div className="lower-box-upper-text">
        <img id="run" src="image/index-pic/run.png"/>
        <label className="distance">18.56 KM</label>
        </div>
        <div className="lower-box-lower-text">
          <div className="lower-box-lower-text-1">
          <img id="place" src="image/index-pic/place.png"/>
        <label className="date-place">13/12/2022 Bangkaen</label>
          </div>
          <div className="lower-box-lower-text-2">
            <img id="calories" src="image/index-pic/calories.png"/>
          <label className="KCal">160 KCal</label>
            </div>
          </div>
      </div>
    </div>
    <div className="low-content-box-6">
      <div className="low-content">
        <div className="lower-box-upper-text">
        <img id="run" src="image/index-pic/run.png"/>
        <label className="distance">20.56 KM</label>
        </div>
        <div className="lower-box-lower-text">
          <div className="lower-box-lower-text-1">
          <img id="place" src="image/index-pic/place.png"/>
        <label className="date-place">12/12/2022 Bangkaen</label>
          </div>
          <div className="lower-box-lower-text-2">
            <img id="calories" src="image/index-pic/calories.png"/>
          <label className="KCal">240 KCal</label>
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
  </div>
  <div className="add-button">
      <a href="https://komsakorn.github.io/9packs/display" target="_blank" className="close"><img className='close-icon' src={'/image/index-pic/icons8-plus-48.png'} /></a>
      </div>
  </section>
    </>
  );
}

export default ActivityList;