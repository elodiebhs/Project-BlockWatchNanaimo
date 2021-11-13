import React from 'react'
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Logo
     </div>

      <nav>
        <ul>
          <li><Link to ="/">All Meetups</Link></li>
          <li><Link to ="/new-meetup">Add New Meetup</Link></li>
          <li><Link to ="/favorites">My favorites</Link></li>
          <li><Link to ="/to-do">To Do List</Link></li>
         
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
