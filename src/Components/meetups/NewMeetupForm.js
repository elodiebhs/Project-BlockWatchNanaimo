import { useRef } from 'react'
import classes from "./NewMeetupForm.module.css"
import Card from "../ui/Card"

import React from 'react'

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addresseInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddresse = addresseInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      addresse: enteredAddresse,
      description: enteredDescription
    }

    console.log(meetupData)

  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup title</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Address</label>
          <input type="text" required id="addresse" ref={addresseInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Description</label>
          <textarea type="url" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit Meetup</button>
        </div>
      </form>

    </Card>
  )
}

export default NewMeetupForm
