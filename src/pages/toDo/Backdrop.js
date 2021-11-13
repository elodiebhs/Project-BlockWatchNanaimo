import React from 'react'
import classes from './ToDo.module.css';

function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onCancel}/>
      
  )
}

export default Backdrop
