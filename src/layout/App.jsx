import React from "react";
import { Switch, Route } from "react-router-dom";

import Events from "../pages/Events";
import MainView from "../components/MainView/MainView";
import Navigation from "../components/Navigation/Navigation";
import Home from "../pages/Home";
import EventDetails from "../pages/EventDetails";

import { useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()

  const [showForm, setShowForm] = React.useState(false);
  const [selectedEvent, setSelectedEvent] = React.useState(null);

  console.log(pathname)
  function handleSelectedEvent(event) {
    setSelectedEvent(event);
    setShowForm(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setShowForm(true);
  }

  function handleCloseForm() {
    setSelectedEvent(null);
    setShowForm(false);
  }
  

  return (
    <div id='main-app-container'>
      { pathname !== "/" && <Navigation setShowForm={handleCreateFormOpen} /> }
      <MainView>
        <Switch>
          <Route path='/' exact >
            <Home />
          </Route>
          <Route path='/events' exact>
            <Events
              showForm={showForm}
              handleCloseForm={handleCloseForm}
              handleSelectedEvent={handleSelectedEvent}
              selectedEvent={selectedEvent}
            />
          </Route>
          <Route path='/events/:id'>
            <EventDetails />
          </Route>
        </Switch>
      </MainView>
    </div>
  );
}

export default App;
