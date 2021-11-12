

// import Todo from './Components/Todo'
import { Route, Switch} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups"
import NewMeetupPage from "./pages/NewMeetup"
import FavoriteMeetupPage from "./pages/FavoriteMeetup"


function App() {
  return (
    <div >
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />

        </Route>

        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoriteMeetupPage />
        </Route>
      </Switch>
      {/* 
      <h1>My Todos</h1>
      <Todo text="Learn React" /> */}
    </div>
  );
}

export default App;
