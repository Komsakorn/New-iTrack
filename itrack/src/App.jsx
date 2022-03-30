import React from 'react';
import './App.css';
import Header from './componants/Header/Header';
import Navbar from './componants/Navbar/Navbar';
import Box from './componants/Box/Box';
import Login from './componants/page/Login';

const App = () => {
  return (<>
   <Header imgSrc='image/itracklogo.png' title="iTRACK"/>
   <Navbar />
   <Box />
   </>
  );
}

export default App;