import React from 'react';
import './App.css';
import Login from './componants/page/Login';
import AddActivity from './componants/page/Add-activity';
import ActivityList from './componants/page/Activity-list';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (<>
  <ActivityList />
   </>
  );
}


  //<BrowserRouter>
  //<Routes>
  //<Route path="/" element={<Login />} />
  //<Route path="add-activity" element={<AddActivity />} />
  //<Route path="activity-list" element={<ActivityList />} />
  //</Routes>
  //</BrowserRouter>
export default App;