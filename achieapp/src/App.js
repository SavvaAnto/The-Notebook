import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://i.pinimg.com/originals/c7/80/5e/c7805ee9aa1a16baaa33a7b1be2f220e.png'></img>
      </header>
      <nav className='nav'>
        <div>
         <a href='#mywall'>My wall</a>
        </div>
        <div>
         <a href='#followers'>Followers</a>
        </div>
        <div>
         <a href='#following'>Following</a>
        </div>
        <div>
          <a href='#feed'>Feed</a>
        </div>
        <div>
         <a href='#settings'>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
         <img src='https://mythsandmountains.com/wp-content/uploads/2018/08/nepal-1.jpg'></img>
        </div>
        <div>
          Ava + description
        </div>

        <div>
          Achievements
          <div>
          Add achievement
          </div>
          <div>
            Achievement 1
          </div>
          <div>
            Achievement 2
          </div>
          <div>
            Achievement 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;