

// import Todo from './Components/Todo'
import { Route, Switch} from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups"
import AddNewMeetupPage from "./pages/AddNewMeetup"
import FavoriteMeetupPage from "./pages/FavoriteMeetup"
import Todo from "./pages/toDo/Todo"
import Layout from "./Components/layout/Layout"


function App() {
  return (
    <div >
      <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>

        <Route path="/new-meetup">
          <AddNewMeetupPage />
        </Route>

        <Route path="/favorites">
          <FavoriteMeetupPage />
        </Route>

        <Route path="/to-do">
          <Todo  text="Exemple"/>
        </Route>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
