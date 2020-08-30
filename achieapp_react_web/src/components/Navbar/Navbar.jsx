import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={classes.nav}>
        <div>
          <a href="#mywall">My wall</a>
        </div>
        <div>
          <a href="#followers">Followers</a>
        </div>
        <div>
          <a href="#following">Following</a>
        </div>
        <div>
          <a href="#feed">Feed</a>
        </div>
        <div>
          <a href="#settings">Settings</a>
        </div>
      </nav>
    );
}

export default Navbar;