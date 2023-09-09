import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;