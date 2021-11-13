import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"

import React from 'react'

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup title</label>
        <input type="text" required id="title"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Image</label>
        <input type="url" required id="image"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="title">Address</label>
        <input type="text" required id="addresse"></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="title">Description</label>
        <textarea type="url" required rows="5"></textarea>
      </div>
      <div className={classes.actions}>
        <button>Submit Meetup</button>
      </div>
      </form>

    </Card>
  )
}

export default NewMeetupForm
