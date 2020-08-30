import React from 'react';
import classes from './Achievements.module.css';
import NewAchievement from './NewAchievement/NewAchievement';
import Achievement from './Achievement/Achievement';

const Achievements = () => {
    return (
        <div className={classes.achievements}>
          Achievements
          <NewAchievement />
          <Achievement />
          <Achievement />
          <Achievement />
        </div>
    );
}

export default Achievements;