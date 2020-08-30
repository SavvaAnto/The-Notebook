import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Wall from './components/Wall/Wall';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Wall />
    </div>
  );
}

export default App;