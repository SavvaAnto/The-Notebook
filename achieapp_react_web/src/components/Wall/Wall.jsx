import React from 'react';
import classes from './Wall.module.css';
import Achievements from './Achievements/Achievements';

const Wall = () => {
    return (
      <div className={classes.content}>
        <div>
          <img src="https://mythsandmountains.com/wp-content/uploads/2018/08/nepal-1.jpg"></img>
        </div>
        <div>Ava + description</div>  
        <Achievements />
      </div>
    );
}

export default Wall;