import { React, useState, useEffect } from 'react'
import MeetupList from "../Components/meetups/MeetupList"


// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];
function AllMeetupsPage() {
  //we start in a loading state
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    //by default fecth send a get request to get our data
    fetch('https://blockwatch-88cf6-default-rtdb.firebaseio.com/meetups.json',
      {}
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup)
      }
      //we set loading to false when we have data
      setIsLoading(false)
      setLoadedMeetups(meetups)
    });
  }, []);

  if (isLoading) {
    return (<section><p>Loading...</p></section>);
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {/* <ul>
      {DUMMY_DATA.map((meetup)=>{
        return <li key={meetup.id}>{meetup.title}</li>
      })}
      </ul> */}
      {/* <MeetupList meetups={DUMMY_DATA} /> */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage
