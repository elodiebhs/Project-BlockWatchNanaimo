import React from 'react'
import NewMeetupForm from '../Components/meetups/NewMeetupForm'


function AddNewMeetupPage() {
  function addMeetupHandler(meetupData){
    //get the url from FireBase
    //by default fecth send a get request
    fetch('https://blockwatch-88cf6-default-rtdb.firebaseio.com/meetups.json',{
      method: 'POST',
      body:JSON.stringify(meetupData),
      headers:{
        "content-Type":'application/json'
      }
    });
  }
  return (
   <section>
     <h1>Add a new Meetup</h1>
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>
   </section>
  )
}

export default AddNewMeetupPage
